const { pool } = require('../db');
const projectInfos = require('./projects');

const createProjects = async () => {
    try {

        let promises = [];

        // insert projects into Project table
        for (const projectInfo of projectInfos) {
            promises.push(
                pool.query(
                    `INSERT INTO "Project"
                        (id, name, description, creator)
                        VALUES ($1, $2, $3, $4)
                    `,
                    [projectInfo.id, projectInfo.name, projectInfo.description, projectInfo.creator]
                )
            );
        }

        await Promise.all(promises);
        
        promises = [];
        // insert into ProjectMember, ProjectSkill, ProjectTag, ProjectLink
        for (const projectInfo of projectInfos) {

            promises.push(
                pool.query(
                    `INSERT INTO "ProjectMember" 
                        (project_id, username) 
                        VALUES ($1, $2)`,
                    [projectInfo.id, projectInfo.creator]
                )
            );

            for (const skill of projectInfo.skills) {
                promises.push(
                    pool.query(
                        'INSERT INTO "ProjectSkill" (project_id, skill) VALUES ($1, $2)',
                        [projectInfo.id, skill]
                    )
                );
            }

            for (const tag of projectInfo.tags) {
                promises.push(
                    pool.query(
                        'INSERT INTO "ProjectTag" (project_id, tag) VALUES ($1, $2)',
                        [projectInfo.id, tag]
                    )
                );
            }

            if (projectInfo.links) {
                for (const link of projectInfo.links) {
                    promises.push(
                        pool.query(
                            `INSERT INTO "ProjectLink" (project_id, link, type) VALUES ($1, $2, $3)`, 
                            [projectInfo.id, link.link, link.type]
                        )
                    );
                }
            }

        }

        await Promise.all(promises);
    } catch (err) {
        console.error(err);
    }

};

module.exports = createProjects;