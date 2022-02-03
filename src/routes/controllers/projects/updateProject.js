const { pool } = require('../../../utils/db');

const updateProject = async (req, res) => {
    try {
        const { username } = req; // username passed after authenticating token
        const { id } = req.params; // id of project
        const { name, description, status, skills, tags, members } = req.body;

        // change project name if passed in body
        if (typeof name !== 'undefined')
            await pool.query('UPDATE "Project" SET name = $1 WHERE id = $2', [
                name,
                id,
            ]);

        // change project description if passed in body
        if (typeof description !== 'undefined')
            await pool.query(
                'UPDATE "Project" SET description = $1 WHERE id = $2',
                [description, id]
            );

        // change project status if passed in body
        if (typeof status !== 'undefined')
            await pool.query('UPDATE "Project" SET status = $1 WHERE id = $2', [
                status,
                id,
            ]);

        // change project skills if passed in body
        if (typeof skills !== 'undefined') {
            // delete all skills currently listed for the project
            await pool.query(
                'DELETE FROM "ProjectSkill" WHERE project_id = $1',
                [id]
            );
            if (skills.length) {
                const values = skills.map((skill, i) => {
                    return `($1, $${i + 2})`;
                });
                // add skills passed in through body
                await pool.query(
                    `INSERT INTO "ProjectSkill" (project_id, skill) VALUES ${values}`,
                    [id].concat(skills)
                );
            }
        }

        // change project tags if passed in body
        if (typeof tags !== 'undefined') {
            // delete all tags currently listed for the project
            await pool.query('DELETE FROM "ProjectTag" WHERE project_id = $1', [
                id,
            ]);
            if (tags.length) {
                const values = tags.map((tag, i) => {
                    return `($1, $${i + 2})`;
                });
                // add tags passed in through body
                await pool.query(
                    `INSERT INTO "ProjectTag" (project_id, tag) VALUES ${values}`,
                    [id].concat(tags)
                );
            }
        }

        // change project members if passed in body
        if (typeof members !== 'undefined') {
            if (!members.includes(username))
                res.status(400).json({
                    msg: 'Cannot remove yourself as you are the project creator',
                });
            // remove all members currently listed for the project
            await pool.query(
                'DELETE FROM "ProjectMember" WHERE project_id = $1',
                [id]
            );
            if (members.length) {
                const values = members.map((member, i) => {
                    return `($1, $${i + 2})`;
                });
                // add members passed in through body
                await pool.query(
                    `INSERT INTO "ProjectMember" (project_id, username) VALUES ${values}`,
                    [id].concat(members)
                );
            }
        }

        res.sendStatus(204);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = updateProject;
