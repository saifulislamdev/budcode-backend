const { pool } = require('../../../utils/db');

const getCreatedProjects = async (req, res) => {
    try {
        const { username } = req; // username passed after authenticating token

        // Returns some info about the project
        // For getting full info about a project, refer to documentation
        const { rows } = await pool.query(
            'SELECT id, name, description FROM "Project" WHERE creator = $1',
            [username]
        );

        return res.status(200).json({ projects: rows });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getCreatedProjects;
