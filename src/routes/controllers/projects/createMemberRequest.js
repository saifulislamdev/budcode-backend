const { pool } = require('../../../utils/db');

const createMemberRequest = async (req, res) => {
    try {
        const { username } = req;
        const { id } = req.params;
        const { message } = req.body;

        // check if project exists and is not completed
        const { rows: project, rowCount: validProject } = await pool.query(
            'SELECT creator, name \
                FROM "Project" \
                WHERE id = $1 AND status = \'In Progress\'',
            [id]
        );
        if (!validProject)
            return res.status(400).json({
                msg: 'Project may not exist or is not accepting requests currently if it exists',
            });

        // check if user is already a member of project
        const { rows: alreadyMember } = await pool.query(
            'SELECT exists( \
                SELECT username \
                FROM "ProjectMember" \
                WHERE project_id = $1 AND username = $2 \
            )',
            [id, username]
        );
        if (alreadyMember[0].exists)
            return res.status(400).json({
                msg: 'Already a member! If you were previously a member, the creator has to manually add you.',
            });

        // check if a request was already made by user in the past
        const { rows: requestExists } = await pool.query(
            'SELECT exists( \
                SELECT project_id, username \
                FROM "ProjectJoinRequest" \
                WHERE project_id = $1 AND username = $2 \
            )',
            [id, username]
        );

        if (requestExists[0].exists)
            return res.status(400).json({ msg: 'Request already exists' });

        // add request to database
        await pool.query(
            'INSERT INTO "ProjectJoinRequest"(project_id, username, message) VALUES($1, $2, $3)',
            [id, username, message || '']
        );

        // give project creator a notification
        const { creator: projectCreator, name: projectName } = project[0];
        await pool.query(
            'INSERT INTO "UserNotification"(username, subject, body, type) VALUES($1, $2, $3, $4)',
            [
                projectCreator,
                `New member request for ${projectName}`,
                `${username} has requested to join your ${projectName} project!`,
                'Request',
            ]
        );

        return res.status(201).json({ msg: 'Request made' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = createMemberRequest;
