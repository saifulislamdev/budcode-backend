const { pool } = require('../../../utils/db');

const getAllProjects = async (req, res) => {
    try {
        const projects = await pool.query('SELECT id,name,description,creator,status,created_at FROM "Project"');
        let promises = [];

        // get skills of projects
        promises.push(...projects.rows.map(async (row) => {
            const skills = await pool.query({
                text: 'SELECT skill FROM "ProjectSkill" WHERE project_id = $1',
                values: [row.id],
                rowMode: 'array',
            });
            row.skills = skills.rows.flat();
            return row;
        }));

        // get tags of projects
        promises.push(...projects.rows.map(async (row) => {
            const tags = await pool.query({
                text: 'SELECT tag FROM "ProjectTag" WHERE project_id = $1',
                values: [row.id],
                rowMode: 'array',
            });
            row.tags = tags.rows.flat();
            return row;
        }));

        await Promise.all(promises);
        return res.status(200).json(projects.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getAllProjects;