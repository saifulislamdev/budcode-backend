const { pool } = require('../db');
const projectsUpdates = require('./projectsUpdates');

// Creates mock project updates data
const createProjectUpdatesMockData = async () => {
    try {
        const { rows: recordsCount } = await pool.query(
            'SELECT COUNT(*) FROM "ProjectUpdate"'
        );

        // Don't insert mock data if there is enough records already
        if (recordsCount[0]['count'] >= 11) return;

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
            } catch (err) {
                console.log(err);
            }
        }

        // Set auto-increment after insertions with explicit id
        await pool.query(
            `SELECT setval('"ProjectUpdate_id_seq"', (SELECT MAX(id) from "ProjectUpdate"))`
        );
    } catch (err) {
        console.log(err);
    }
};

module.exports = createProjectUpdatesMockData;
