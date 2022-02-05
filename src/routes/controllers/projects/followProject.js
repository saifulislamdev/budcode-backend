const { pool } = require('../../../utils/db');

const followProject = async (req, res) => {
    try {
        const { username } = req;
        const { id } = req.params; // id of project

        const { rows: prevFollowRecord, rowCount: prevFollowed } =
            await pool.query(
                'SELECT status \
                FROM "ProjectFollower" \
                WHERE project_id = $1 AND username = $2',
                [id, username]
            );

        if (prevFollowed && prevFollowRecord[0].status)
            return res
                .status(400)
                .json({ msg: 'Already following the project' });

        if (!prevFollowed) {
            // user has not followed the project in the past
            await pool.query(
                'INSERT INTO "ProjectFollower"(project_id, username) VALUES ($1, $2)',
                [id, username]
            );
        } else {
            // user has followed the project in the past but is currently not following
            await pool.query(
                'UPDATE "ProjectFollower" \
                SET status = true \
                WHERE project_id = $1 AND username = $2',
                [id, username]
            );
        }
        return res.status(201).json({ msg: 'Now following project' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = followProject;
