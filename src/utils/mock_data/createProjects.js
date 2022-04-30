const { pool } = require('../db');
const initialProjects = require('./projects');
const generateProjects = require('./pullData');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const createProjects = async () => {
    try {

        // check if mock data was already inserted
        const { rowCount } = await pool.query(`SELECT id FROM "Project" LIMIT 300`);
        if (rowCount === 300 || process.env.NO_MOCK_PROJECTS) {
            return;
        }

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

        const projectInfos = await generateProjects(topics);
        projectInfos.push(...initialProjects);

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
        console.log('\nMock project data created');
    } catch (err) {
        console.error(err);
    }
};

module.exports = createProjects;