const { Octokit } = require('@octokit/core');
const path = require('path');
const dotenv = require('dotenv');
const usersInfos = require('./users');
const initialProjects = require('./initialProjects');

// range: [min, max)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

function repoFormat(repo, id, creator) {
    let project = {};
    project.id = id;
    project.name = repo.name.replace(new RegExp('-', 'g'), ' ');
    project.creator = creator;
    project.description = repo.description;
    project.skills = repo.languages;
    project.tags = repo.topics.map((topic) =>
        topic.replace(new RegExp('-', 'g'), ' ')
    );
    project.links = [{ type: 'GitHub', link: repo.html_url }];

    return project;
}

/**
 * @param {string} query - search query
 */
const fetchRepos = async (query) => {
    const octokit = new Octokit({ auth: process.env.GITAUTH });
    let params = new URLSearchParams();
    params.append('q', query);
    params.append('sort', 'stars');
    params.append('order', 'desc');
    params.append('per_page', '100');
    params.append('page', '1');
    let url = `/search/repositories?${params.toString()}`;

    const searchResult = await octokit.request(`GET ${url}`, {});
    let searchData = searchResult.data.items;

    // get rid of repos with no tags or description
    searchData = searchData.filter(
        (repo) => repo.topics.length > 0 && repo.description != null
    );

    // get languages associated with project

    await Promise.all(
        searchData.map(async (repo) => {
            url = `/repos/${repo.owner.login}/${repo.name}/languages`;
            let lang = await octokit.request(`GET ${url}`, {});
            repo.languages = Object.keys(lang.data);
        })
    );

    // get rid of repos with no associated languages
    searchData = searchData.filter((repo) => repo.languages.length > 0);

    return searchData;
};

/**
 * @param {Array<string>} topics - the topics for which projects should relate to
 * @return {Promise<Array<Object>>} returns a promise that is fulfilled with an array of objects representing projects
 */
const generateProjects = async (topics) => {
    // start at id > 1 because of reserved ids in ./initialProjects.js
    const lastInitialProjectId = initialProjects.at(-1).id;
    let id = lastInitialProjectId + 1;

    // up to 100 projects will be fetched for each topic
    // the actual number may be smaller due to filtering out projects without tags/skills/description
    const searches = topics.length;

    let projects = [];

    // this could be handled more quickly in theory (by fetching the pages asynchronously),
    // but for some reason, GitHub times out the requests when this is done and returns
    // incomplete results
    //
    // it would still work, however more topics would need to be added since the # of projects
    // is usually less than 1000 due to the results being incomplete
    for (let i = 0; i < searches; ++i) {
        const repos = await fetchRepos(topics[i]);
        repos.forEach((repo) => {
            process.stdout.write(
                `\rAdding project ${id} from page ${i + 1}...`
            );
            let creator = usersInfos[getRandomInt(0, 20)].username;
            projects.push(repoFormat(repo, id, creator));
            ++id;
        });
    }

    return projects;
};

module.exports = generateProjects;
