const jwt = require('jsonwebtoken');
const { pool } = require('../../../utils/db');

const getProject = async (req, res) => {
    try {
        const { id } = req.params;

        // check if project exists
        const { rows: projectExists } = await pool.query(
            'SELECT exists( \
                SELECT id \
                FROM "Project" \
                WHERE "Project".id = $1 \
            )',
            [id]
        );

        if (!projectExists[0].exists)
            return res.status(400).json({ msg: 'No matching project exists' });

        // gather basic info about project
        const { rows: basicInfo } = await pool.query(
            'SELECT "Project".id, "Project".name, "Project".description, "Project".status, \
            "User".first_name AS "creatorFirstName", "User".last_name as "creatorLastName", "User".email as "creatorEmail" \
                FROM "Project" \
                JOIN "User" ON "User".username = "Project".creator \
                WHERE "Project".id = $1',
            [id]
        );

        // gather the project's skills
        let { rows: skills } = await pool.query({
            text: 'SELECT skill FROM "ProjectSkill" WHERE project_id = $1',
            values: [id],
            rowMode: 'array',
        });
        skills = skills.flat(); // flatten nested array

        // gather the project's tags
        let { rows: tags } = await pool.query({
            text: 'SELECT tag FROM "ProjectTag" WHERE project_id = $1',
            values: [id],
            rowMode: 'array',
        });
        tags = tags.flat(); // flatten nested array

        // gather the project's members
        let { rows: members } = await pool.query({
            text: 'SELECT username FROM "ProjectMember" WHERE project_id = $1',
            values: [id],
            rowMode: 'array',
        });
        members = members.flat(); // flatten nested array

        // gather the updates sent from the project's members
        const { rows: updates } = await pool.query(
            'SELECT id, subject, body, author, time_posted \
                FROM "ProjectUpdate" \
                WHERE project_id = $1',
            [id]
        );

        const token = req.headers['authorization']; // token comes in an authorization header

        // check if user can edit the project
        let canEdit = false;
        if (typeof token !== 'undefined') {
            try {
                let { username } = jwt.verify(token, process.env.JWT_SECRET);

                const { rows: isProjectCreator } = await pool.query(
                    'SELECT exists( \
                        SELECT creator \
                        FROM "Project" \
                        WHERE id = $1 AND creator = $2)',
                    [id, username]
                );
                if (isProjectCreator[0].exists) canEdit = true;
            } catch (err) {
                console.log(err);
            }
        }

        // check if user can follow the project

        // check if user is following the project already

        // check if user can request to join the project

        // check if user requested to join the project already

        const projectInfo = {
            ...basicInfo['0'],
            skills,
            tags,
            members,
            updates,
            canEdit: canEdit,
        };

        return res.status(200).json(projectInfo);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getProject;
