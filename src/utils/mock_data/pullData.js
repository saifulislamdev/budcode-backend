const { Octokit } = require('@octokit/core');
const path = require('path');
const dotenv = require('dotenv');
const usersInfos = require('./users');

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
    project.name = repo.name;
    project.creator = creator;
    project.description = repo.description;
    project.skills = repo.languages;
    project.tags = repo.topics;
    project.links = [{ type: 'GitHub', link: repo.html_url }]

    return project;
}


/**
 * @param {number} page - integer indicating page of results
 * @param {string} query - search query
 */
const fetchRepos = async (page, query) => {

    const octokit = new Octokit({auth: process.env.GITAUTH});
    let params = new URLSearchParams();
    params.append('q', query);
    params.append('sort', 'stars');
    params.append('order', 'desc');
    params.append('per_page', '100');
    params.append('page', `${page}`);
    let url = `/search/repositories?${params.toString()}`;
    
    const searchResult = await octokit.request(`GET ${url}`, {});
    let searchData = searchResult.data.items;

    // get rid of repos with no tags or description
    searchData = searchData.filter(repo => repo.topics.length > 0 && repo.description != null);

    // get languages associated with project

    await Promise.all(searchData.map(async (repo) => {
        url = `/repos/${repo.owner.login}/${repo.name}/languages`;
        let lang = await octokit.request(`GET ${url}`, {});
        repo.languages = Object.keys(lang.data);
    }));

    // get rid of repos with no associated languages
    searchData = searchData.filter(repo => repo.languages.length > 0);
    
    return searchData;
};

/**
 * @param {Array<string>} topics - the topics for which projects should relate to
 * @return {Promise<Array<Object>>} returns a promise that is fulfilled with an array of objects representing projects
 */
const generateProjects = async (topics) => {

    // start at id=6 because of reserved first 5 ids
    let id = 6;

    // up to 100 projects will be fetched for each topic
    // the actual number may be smaller due to filtering out projects without tags/skills/description
    const searches = topics.length;

    let projects = [];
    for (let i = 0; i < searches; ++i) {
        const repos = await fetchRepos(1, topics[i]);
        repos.forEach((repo) => {
            let creator = usersInfos[getRandomInt(0, 20)].username;
            projects.push(repoFormat(repo, id, creator));
            ++id;
        });
    }

    return projects;
};

// main() function for testing purposes
// call generateProjects() in here
// currently, the output of generateProjects() is printed to output.txt 
const main = async () => {

    const { Console } = require('console');
    const fs = require("fs");
    const myLogger = new Console({
      stdout: fs.createWriteStream(path.join(__dirname, 'output.txt'))
    });

    const topics = [
        'cooking',
        'game',
        'social',
        'calendar',
        'machine learning',
        'optimize',
        'note taking',
        'gps',
        'fitness',
        'bitcoin',
        'image',
        'remote',
        'music',
        'stocks',
        'password'
    ];
    
    let projects = await generateProjects(topics);
    myLogger.dir(projects, {depth: null, maxArrayLength: null});
};

main();

module.exports = generateProjects;