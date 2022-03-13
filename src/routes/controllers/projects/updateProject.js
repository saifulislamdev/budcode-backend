const { pool } = require('../../../utils/db');

const updateProject = async (req, res) => {
    try {
        const { username } = req; // username passed after authenticating token
        const { id } = req.params; // id of project
        const { name, description, links, status, skills, tags, members } =
            req.body;

        // change project name if passed in body
        if (typeof name === 'string')
            await pool.query('UPDATE "Project" SET name = $1 WHERE id = $2', [
                name,
                id,
            ]);

        // change project description if passed in body
        if (typeof description === 'string')
            await pool.query(
                'UPDATE "Project" SET description = $1 WHERE id = $2',
                [description, id]
            );

        // TODO: don't delete all links instead remove links not passed in and
        // insert rest that are not already included

        // TODO: change links if passed in body
        if (Array.isArray(links)) {
            // delete all links currently listed for the project
            await pool.query(
                'DELETE FROM "ProjectLink" WHERE project_id = $1',
                [id]
            );
            if (links.length) {
                // parameterPlaceholders becomes ["($1, $2, $3)", "($1, $4, $5)", ...]
                const parameterPlaceholders = links.map((link, i) => {
                    return `($1, $${(i + 1) * 2}, $${(i + 1) * 2 + 1})`;
                });

                // gather attributes of links in a 1D array to pass as parameters into insert statement
                const linksToFlatArray = links
                    .map((linkAttributes) => {
                        // gather link attributes in same order as order in insert statement
                        const sortedKeys = Object.keys(linkAttributes).sort();
                        // returns each link attribute
                        return sortedKeys.map(
                            (attribute) => linkAttributes[attribute]
                        );
                    })
                    .flat();

                // add links passed in through body
                const parameters = [id].concat(linksToFlatArray);
                await pool.query(
                    `INSERT INTO "ProjectLink" (project_id, link, type) VALUES ${parameterPlaceholders}`,
                    parameters
                );
            }
        }

        // change project status if passed in body
        if (typeof status === 'string')
            await pool.query('UPDATE "Project" SET status = $1 WHERE id = $2', [
                status,
                id,
            ]);

        // TODO: don't delete all skills instead remove skills not passed in and
        // insert rest that are not already included

        // change project skills if passed in body
        if (Array.isArray(skills)) {
            // delete all skills currently listed for the project
            await pool.query(
                'DELETE FROM "ProjectSkill" WHERE project_id = $1',
                [id]
            );
            if (skills.length) {
                // parameterPlaceholders becomes ["($1, $2)", "($1, $3)", ...]
                const parameterPlaceholders = skills.map((skill, i) => {
                    return `($1, $${i + 2})`;
                });
                // add skills passed in through body
                const parameters = [id].concat(skills);
                await pool.query(
                    `INSERT INTO "ProjectSkill" (project_id, skill) VALUES ${parameterPlaceholders}`,
                    parameters
                );
            }
        }

        // TODO: don't delete all tags instead remove tags not passed in and
        // insert rest that are not already included

        // change project tags if passed in body
        if (Array.isArray(tags)) {
            // delete all tags currently listed for the project
            await pool.query('DELETE FROM "ProjectTag" WHERE project_id = $1', [
                id,
            ]);
            if (tags.length) {
                // parameterPlaceholders becomes ["($1, $2)", "($1, $3)", ...]
                const parameterPlaceholders = tags.map((tag, i) => {
                    return `($1, $${i + 2})`;
                });
                // add tags passed in through body
                const parameters = [id].concat(tags);
                await pool.query(
                    `INSERT INTO "ProjectTag" (project_id, tag) VALUES ${parameterPlaceholders}`,
                    parameters
                );
            }
        }

        // TODO: don't delete all members instead remove members not passed in and
        // insert rest that are not already included (or just remove the one member)

        // change project members if passed in body
        if (Array.isArray(members)) {
            if (!members.includes(username))
                // username is guaranteed to be the project creator
                // as it is verified in previous middleware
                return res.status(400).json({
                    msg: 'Cannot remove yourself as you are the project creator',
                });
            // remove all members currently listed for the project
            await pool.query(
                'DELETE FROM "ProjectMember" WHERE project_id = $1',
                [id]
            );
            if (members.length) {
                // parameterPlaceholders becomes ["($1, $2)", "($1, $3)", ...]
                const parameterPlaceholders = members.map((member, i) => {
                    return `($1, $${i + 2})`;
                });
                // add members passed in through body
                const parameters = [id].concat(members);
                await pool.query(
                    `INSERT INTO "ProjectMember" (project_id, username) VALUES ${parameterPlaceholders}`,
                    parameters
                );
            }
        }

        return res.sendStatus(204);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = updateProject;
