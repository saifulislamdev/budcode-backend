const { pool } = require('../db');
const dotenv = require('dotenv');
const path = require('path');

const initialProjects = require('./initialProjects');
const projectInfos = require('./projectInfos');
// const projectInfos = [];

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const createProjects = async () => {
    try {

        // check if mock data was already inserted
        const { rowCount } = await pool.query(`SELECT id FROM "Project" LIMIT 300`);
        if (rowCount === 300) {
            return;
        }

        console.log('Creating projects...');

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

        // Update id incrementation sequence
        await pool.query(`SELECT setval(quote_ident('Project_id_seq'), (SELECT MAX(id) from "Project"))`);
        console.log('Mock project data created');
    } catch (err) {
        console.error(err);
    }
};

module.exports = createProjects;