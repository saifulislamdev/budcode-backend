const { pool } = require('../db');
const projectsUpdates = require('./projectsUpdates');

// Creates mock project updates data
const createProjectUpdatesMockData = async () => {
    try {
        for (const projectUpdate of projectsUpdates) {
            // Inner try-catch to make sure if one statement fails, the subsequent ones don't halt
            try {
                // Insert new record (if not added already)
                await pool.query(
                    '\
                    INSERT INTO "ProjectUpdate"\
                    (id, project_id, subject, body, author)\
                    VALUES ($1, $2, $3, $4, $5)\
                    ',
                    [
                        projectUpdate.id,
                        projectUpdate.project_id,
                        projectUpdate.subject,
                        projectUpdate.body,
                        projectUpdate.author,
                    ]
                );
            } catch (err) {}
        }
    } catch (err) {}
};

module.exports = createProjectUpdatesMockData;
