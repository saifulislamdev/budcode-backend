const { pool } = require('../db');
const joinRequests = require('./joinRequests');

const createJoinRequests = async () => {
    try {

        const { rowCount } = await pool.query(`SELECT id FROM "ProjectJoinRequest" LIMIT 20`);
        if (rowCount === 20) {
            return;
        }

        let promises = [];

        for (const joinRequest of joinRequests) {
            promises.push(
                pool.query(
                    `INSERT INTO "ProjectJoinRequest"(project_id, username, message) VALUES($1, $2, $3)`,
                    [joinRequest.id, joinRequest.username, joinRequest.message || '']
                )
            );

            promises.push(
                pool.query(
                    'INSERT INTO "UserNotification" (username, subject, body, type) VALUES($1, $2, $3, $4)',
                    [
                        joinRequest.projectCreator,
                        `New member request for ${joinRequest.projectName}`,
                        `${joinRequest.username} has requested to join your ${joinRequest.projectName} project!`,
                        'Request',
                    ]
                )
            );
        }

        await Promise.all(promises);
        console.log('Mock project join requests created');
    } catch (err) {
        console.error(err);
    }
};

module.exports = createJoinRequests;