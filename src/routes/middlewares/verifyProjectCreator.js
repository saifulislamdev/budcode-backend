const { pool } = require('../../utils/db');

// Check if user is project creator for valid project editing/viewing privileges
const verifyProjectCreator = async (req, res, next) => {
    try {
        const { username } = req; // username passed after authenticating token
        const { id } = req.params; // id of project

        const { rows: isProjectCreator } = await pool.query(
            'SELECT exists( \
                SELECT creator \
                FROM "Project" \
                WHERE id = $1 AND creator = $2)',
            [id, username]
        );
        if (!isProjectCreator[0].exists)
            return res
                .status(401)
                .json({ msg: 'Not the creator of this project' });

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = verifyProjectCreator;
