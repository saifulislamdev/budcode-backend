const { pool } = require('../../../utils/db');

// TODO: might want to send more information

const getMemberRequests = async (req, res) => {
    try {
        const { id } = req.params; // id of project

        let { rows: memberRequests } = await pool.query(
            'SELECT "ProjectJoinRequest".id, "ProjectJoinRequest".username, "ProjectJoinRequest".message, "ProjectJoinRequest".created_at \
                FROM "ProjectJoinRequest" \
                JOIN "Project" ON "Project".id = "ProjectJoinRequest".project_id \
                WHERE project_id = $1 AND "ProjectJoinRequest".status = \'Requested\' AND "Project".status = \'In Progress\'',
            [id]
        );

        return res.status(200).json({ memberRequests: memberRequests });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getMemberRequests;
