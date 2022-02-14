const { pool } = require('../../../utils/db');

const createMemberRequest = async (req, res) => {
    try {
        const { username } = req;
        const { id } = req.params;
        const { message } = req.body;

        // check if project exists and is not completed
        const { rows: validProject } = await pool.query(
            'SELECT exists( \
                SELECT id \
                FROM "Project" \
                WHERE id = $1 AND status = \'In Progress\' \
            )',
            [id]
        );
        if (!validProject[0].exists)
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
            return res.status(400).json({ msg: 'Already a member' });

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

        // TODO: add notification
        return res.status(201).json({ msg: 'Request made' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = createMemberRequest;
