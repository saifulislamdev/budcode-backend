const { pool } = require('../db');
const joinRequests = require('./joinRequests');

const handleJoinRequests = async () => {
    const { rowCount } = await pool.query(
        `SELECT id FROM "ProjectJoinRequest" WHERE status = 'Accepted' LIMIT 20`
    );
    if (rowCount === 20) {
        return;
    }

    console.log('Mock data: Handling join requests for projects...');

    let requestId = 1;
    let promises = [];

    for (const joinRequest of joinRequests) {
        if (joinRequest.username === 'patrick' && joinRequest.id === 1) {
            joinRequest.decision = 'Denied';
        } else {
            joinRequest.decision = 'Accepted';
        }

        const { id, decision, username, projectName } = joinRequest;

        promises.push(
            pool.query(
                `UPDATE "ProjectJoinRequest" SET status = $1 WHERE id = $2`,
                [decision, requestId]
            )
        );

        if (joinRequest.decision === 'Accepted') {
            promises.push(
                pool.query(
                    'INSERT INTO "ProjectMember" (project_id, username) VALUES($1, $2)',
                    [id, username]
                )
            );

            promises.push(
                pool.query(
                    'INSERT INTO "UserNotification" (username, subject, body, type) VALUES($1, $2, $3, $4)',
                    [
                        username,
                        'Join request accepted',
                        `Your request to join ${projectName} has been accepted by the project creator!`,
                        'Request',
                    ]
                )
            );
        }

        ++requestId;
    }

    await Promise.all(promises);
    console.log('Mock data: Finished handling join requests for projects');
};

module.exports = handleJoinRequests;
