const { pool } = require('../../../utils/db');

const manageMemberRequest = async (req, res) => {
    try {
        const { id } = req.params; // id of join request
        const { decision } = req.body; // decision made by project creator (if true, accepted; if false, denied)

        // verify decision is passed in
        if (typeof decision !== 'boolean')
            return res
                .status(400)
                .json({ msg: 'Decision must be specified with boolean' });

        // verify join request exists
        // and join request is not managed already
        // and project is not completed
        const { rows: request, rowCount: requestExists } = await pool.query(
            'SELECT \
                "ProjectJoinRequest".username, \
                "Project".id, \
                "Project".name, \
                "ProjectJoinRequest".created_at \
             FROM "ProjectJoinRequest" \
             JOIN "Project" ON "Project".id = "ProjectJoinRequest".project_id \
             WHERE \
                "ProjectJoinRequest".id = $1 \
                AND "ProjectJoinRequest".status = \'Requested\' \
                AND "Project".status = \'In Progress\' \
             ORDER BY "ProjectJoinRequest".created_at DESC',
            [id]
        );
        if (!requestExists)
            return res.status(400).json({
                msg: 'Join request may not exist, has been managed already, or the respective project is completed already',
            });
        const {
            username: requestingUser,
            id: projectId,
            name: projectName,
        } = request[0];

        // change join request status
        const newStatus = decision ? 'Accepted' : 'Denied';
        await pool.query(
            'UPDATE "ProjectJoinRequest" SET status = $1 WHERE id = $2',
            [newStatus, id]
        );

        // add user as a project member and notify user of their acceptance (if accepted)
        if (decision) {
            await pool.query(
                'INSERT INTO "ProjectMember"(project_id, username) VALUES($1, $2)',
                [projectId, requestingUser]
            );
            await pool.query(
                'INSERT INTO "UserNotification"(username, subject, body, type) VALUES($1, $2, $3, $4)',
                [
                    requestingUser,
                    'Join request accepted',
                    `Your request to join ${projectName} has been accepted by the project creator!`,
                    'Request',
                ]
            );
        }

        return res.sendStatus(204);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = manageMemberRequest;
