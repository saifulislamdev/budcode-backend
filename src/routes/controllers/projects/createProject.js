const validatingBodyContent = require('../../../helpers/validatingBodyContent');
const { pool } = require('../../../utils/db');

// TODO: links?

const createProject = async (req, res) => {
    try {
        const { username } = req;
        const { name, description, skills, tags } = req.body;
        const required = {
            name,
            description,
            skills,
            tags,
        };
        validatingBodyContent(required, res);

        const result = await pool.query(
            'INSERT INTO "Project" (name, creator, description) VALUES ($1, $2, $3) RETURNING id',
            [name, username, description]
        );
        const id = result.rows[0]['id'];

        let promises = [];
        promises.push(
            pool.query(
                'INSERT INTO "ProjectMember" (project_id, username) VALUES ($1, $2)',
                [id, username]
            )
        );

        for (const skill of skills) {
            promises = [
                ...promises,
                pool.query(
                    'INSERT INTO "ProjectSkill" (project_id, skill) VALUES ($1, $2)',
                    [id, skill]
                ),
            ];
        }

        for (const tag of tags) {
            promises = [
                ...promises,
                pool.query(
                    'INSERT INTO "ProjectTag" (project_id, tag) VALUES ($1, $2)',
                    [id, tag]
                ),
            ];
        }

        await Promise.all(promises);
        return res.status(201).json({ msg: 'Project created' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = createProject;
