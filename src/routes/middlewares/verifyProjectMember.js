const { pool } = require('../../utils/db');

// Check if user is project member
// using the project ID from route and
// using the username passed from authenticateToken middleware
const verifyProjectMember = async (req, res, next) => {
    try {
        const { username } = req; // username passed after authenticating token
        const { id } = req.params; // id of project

        const { rows: isProjectMember } = await pool.query(
            `
            SELECT exists(
                SELECT username
                FROM "ProjectMember"
                WHERE username = $1 AND project_id = $2 AND status = true
                )
            `,
            [username, id]
        );
        if (!isProjectMember[0].exists)
            return res.status(401).json({
                msg: 'You must be a project member in order to perform this feature',
            });

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = verifyProjectMember;
