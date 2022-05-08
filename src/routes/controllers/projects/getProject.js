const getUserFromToken = require('../../../helpers/getUserFromToken');
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
            'SELECT \
                "Project".id, \
                "Project".name, \
                "Project".description, \
                "Project".status, \
                "Project".created_at AS "createdAt", \
                "Project".creator AS "creatorUserName", \
                "User".first_name AS "creatorFirstName", \
                "User".last_name AS "creatorLastName", \
                "User".email AS "creatorEmail" \
            FROM "Project" \
            JOIN "User" ON "User".username = "Project".creator \
            WHERE "Project".id = $1',
            [id]
        );

        // gather the project's links
        const { rows: links } = await pool.query(
            'SELECT link, type FROM "ProjectLink" WHERE project_id = $1',
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
        const { rows: members } = await pool.query(
            'SELECT username, created_at AS "joinedAt" \
            FROM "ProjectMember" \
            WHERE project_id = $1 AND status = true',
            [id]
        );

        // get number of project followers
        const { rowCount: numOfFollowers } = await pool.query(
            'SELECT username FROM "ProjectFollower" WHERE project_id = $1 AND status = true',
            [id]
        );

        // get number of join requests
        const { rowCount: numOfJoinRequests } = await pool.query(
            'SELECT id FROM "ProjectJoinRequest" WHERE project_id = $1 AND status=\'Requested\'',
            [id]
        );

        // gather the updates sent from the project's members
        const { rows: updates } = await pool.query(
            'SELECT id, subject, body, author, time_posted \
                FROM "ProjectUpdate" \
                WHERE project_id = $1',
            [id]
        );

        const token = req.headers['authorization']; // token comes in an authorization header

        // check if user is an authenticated user
        // this info is used for the rest of the code
        let isValidUser = false;
        let username;
        try {
            username = getUserFromToken(token);
            isValidUser = true;
        } catch (err) {}

        // check if user can edit the project
        let canUserEdit;
        if (isValidUser) {
            const { rows: isProjectCreator } = await pool.query(
                'SELECT exists( \
                        SELECT creator \
                        FROM "Project" \
                        WHERE id = $1 AND creator = $2)',
                [id, username]
            );
            if (isProjectCreator[0].exists) canUserEdit = true;
            else canUserEdit = false;
        }

        // check if user is following the project already
        let isUserFollowing;
        if (isValidUser) {
            const { rows: isFollowing } = await pool.query(
                'SELECT exists( \
                    SELECT username \
                    FROM "ProjectFollower" \
                    WHERE username = $1 AND project_id = $2 AND status = true \
                )',
                [username, id]
            );
            if (isFollowing[0].exists) isUserFollowing = true;
            else isUserFollowing = false;
        }

        // check if user can follow the project
        let canUserFollow;
        // not currently following
        if (isValidUser && !isUserFollowing) canUserFollow = true;
        // already following
        else if (isValidUser) canUserFollow = false;

        // check if user requested to join the project already
        let hasUserRequested;
        if (isValidUser) {
            const { rows: hasRequested } = await pool.query(
                'SELECT exists( \
                    SELECT id \
                    FROM "ProjectJoinRequest" \
                    WHERE username = $1 AND project_id = $2 \
                )',
                [username, id]
            );
            if (hasRequested[0].exists) hasUserRequested = true;
            else hasUserRequested = false;
        }

        // check if user is a project member
        let isUserAMember;
        if (isValidUser) {
            const { rows: isMember } = await pool.query(
                'SELECT exists( \
                    SELECT created_at \
                    FROM "ProjectMember" \
                    WHERE username = $1 AND project_id = $2 AND status = true \
                )',
                [username, id]
            );
            if (isMember[0].exists) isUserAMember = true;
            else isUserAMember = false;
        }

        // check if user can request to join the project
        let canUserRequest;
        // not currently requested
        if (isValidUser && !hasUserRequested && !isUserAMember)
            canUserRequest = true;
        // already requested or member
        else if (isValidUser) canUserRequest = false;

        // get mutual skills between project and user
        let { rows: userMutualSkills } = await pool.query({
            text: 'SELECT "UserSkill".skill \
            FROM "UserSkill" \
            INNER JOIN "ProjectSkill" \
            ON "UserSkill".skill = "ProjectSkill".skill \
            WHERE username = $1 \
            AND project_id = $2',
            values: [username, id],
            rowMode: 'array',
        });
        userMutualSkills = userMutualSkills.flat(); // flat nested array

        const projectInfo = {
            ...basicInfo['0'],
            links,
            skills,
            tags,
            members,
            numOfFollowers,
            numOfJoinRequests,
            updates,
            canUserEdit: canUserEdit,
            canUserFollow: canUserFollow,
            canUserRequest: canUserRequest,
            hasUserRequested: hasUserRequested,
            isUserAMember: isUserAMember,
            isUserFollowing: isUserFollowing,
            isValidUser: isValidUser,
            userMutualSkills: userMutualSkills,
        };

        return res.status(200).json(projectInfo);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getProject;
