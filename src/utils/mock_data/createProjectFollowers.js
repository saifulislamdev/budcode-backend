const { pool } = require('../db');
const projectsFollowers = require('./projectsFollowers');

// Creates mock project followers data
const createProjectsFollowersMockData = async () => {
    try {
        for (const projectFollower of projectsFollowers) {
            // Inner try-catch to make sure if one statement fails, the subsequent ones don't halt
            try {
                // Insert new record (if not added already)
                await pool.query(
                    '\
                INSERT INTO "ProjectFollower"\
                    (project_id, username)\
                VALUES\
                    ($1, $2)\
                ',
                    [projectFollower.project_id, projectFollower.username]
                );

                // Update following status to true
                // (in case it was previously false from previous record)
                await pool.query(
                    '\
                UPDATE "ProjectFollower" \
                SET status = true \
                WHERE project_id = $1 AND username = $2\
                ',
                    [projectFollower.project_id, projectFollower.username]
                );
            } catch (err) {}
        }
    } catch (err) {}
};

module.exports = createProjectsFollowersMockData;
