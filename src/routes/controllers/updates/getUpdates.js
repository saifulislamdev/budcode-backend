const { pool } = require('../../../utils/db');

const getUpdates = async (req, res) => {
    try {
        const { username } = req;

        const updates = await pool.query(
            `SELECT "ProjectUpdate".id,project_id,name AS project_name,subject,body,author,time_posted
                FROM "ProjectUpdate"
                JOIN "Project"
                ON "Project".id = "ProjectUpdate".project_id
                WHERE project_id IN (SELECT project_id
                                        FROM "ProjectFollower"
                                        WHERE username = $1)
                ORDER BY time_posted DESC
            `,
            [username]
        );

        return res.status(200).json(updates.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getUpdates;
