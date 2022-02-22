const { pool } = require('../../../utils/db');

const getSuggestions = async (req, res) => {
    try {
        const { username } = req;
        const userSkills = pool.query({
            text: `SELECT skill FROM "UserSkill" WHERE username = $1`,
            values: [username],
            rowMode: 'array',
        });
        const userTags = pool.query({
            text: `SELECT interest FROM "UserInterest" WHERE username = $1`,
            values: [username],
            rowMode: 'array',
        });
        const results = await Promise.all([userSkills, userTags]);
        const SKILLS = 0;
        const TAGS = 1;

        const projects = await pool.query(
            `SELECT id,name,description,creator,status,created_at 
            FROM "Project" 
            WHERE id IN (SELECT project_id 
                        FROM "ProjectSkill" 
                        WHERE skill = ANY($1))
                    OR id IN (SELECT project_id 
                        FROM "ProjectTag" 
                        WHERE tag = ANY($2))`,
            [results[SKILLS].rows.flat(), results[TAGS].rows.flat()]
        );

        let promises = [];

        // get skills of projects
        promises.push(
            ...projects.rows.map(async (row) => {
                const skills = await pool.query({
                    text: `SELECT skill FROM "ProjectSkill" WHERE project_id = $1`,
                    values: [row.id],
                    rowMode: 'array',
                });
                row.skills = skills.rows.flat();
                return row;
            })
        );

        // get tags of projects
        promises.push(
            ...projects.rows.map(async (row) => {
                const tags = await pool.query({
                    text: `SELECT tag FROM "ProjectTag" WHERE project_id = $1`,
                    values: [row.id],
                    rowMode: 'array',
                });
                row.tags = tags.rows.flat();
                return row;
            })
        );

        await Promise.all(promises);
        return res.status(200).json(projects.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getSuggestions;
