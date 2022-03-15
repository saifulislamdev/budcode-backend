const getUserFromToken = require('../../../helpers/getUserFromToken');
const checkReviewability = require('../../../helpers/checkReviewability');
const { pool } = require('../../../utils/db');

const getUserInfo = async (req, res) => {
    try {
        const { id: usernameFromRoute } = req.params; // username of the profile being visited
        const token = req.headers['authorization']; // token comes in an authorization header

        // get username from token
        let usernameFromToken;
        if (typeof token === 'string') {
            try {
                usernameFromToken = getUserFromToken(token);
            } catch (err) {}
        }

        // get user's basic info
        const { rows: basicInfo } = await pool.query(
            '\
            SELECT \
                first_name AS "firstName", \
                last_name AS "lastName", \
                email, \
                bio, \
                occupation, \
                gender, \
                created_at as "signUpTime" \
            FROM "User" \
            WHERE username = $1',
            [usernameFromRoute]
        );

        // gather the user's associated links
        const { rows: links } = await pool.query(
            '\
            SELECT link, type FROM "UserLink" WHERE username = $1',
            [usernameFromRoute]
        );

        // gather the user's interests
        let { rows: interests } = await pool.query({
            text: 'SELECT interest FROM "UserInterest" WHERE username = $1',
            values: [usernameFromRoute],
            rowMode: 'array',
        });
        interests = interests.flat(); // flatten nested array

        // gather the projects that the user follows
        const { rows: projectFollowings } = await pool.query(
            '\
            SELECT \
                "ProjectFollower".project_id AS "projectId", \
                "Project".id AS "projectId", \
                "Project".name AS "projectName" \
            FROM "ProjectFollower" \
            JOIN "Project" ON "Project".id = "ProjectFollower".project_id \
            WHERE "ProjectFollower".username = $1 AND "ProjectFollower".status = true',
            [usernameFromRoute]
        );

        // gather the projects that the user is part of
        const { rows: projectMemberships } = await pool.query(
            '\
            SELECT \
                "Project".id AS "projectId", \
                "Project".name AS "projectName", \
                "Project".status AS "projectStatus", \
                "ProjectMember".created_at AS "joinTime" \
            FROM "ProjectMember" \
            JOIN "Project" ON "Project".id = "ProjectMember".project_id \
            WHERE "ProjectMember".username = $1',
            [usernameFromRoute]
        );

        // gather the reviews made by other users for this user
        const { rows: reviews } = await pool.query(
            'SELECT subject, body, created_at AS "createdAt" \
            FROM "UserReview" \
            WHERE reviewed_username = $1',
            [usernameFromRoute]
        );

        // gather the user's skills
        let { rows: skills } = await pool.query({
            text: 'SELECT skill FROM "UserSkill" WHERE username = $1',
            values: [usernameFromRoute],
            rowMode: 'array',
        });
        skills = skills.flat();

        // check if visiting user can edit the visited profile (user is visiting their own profile)
        let canEdit = usernameFromToken === usernameFromRoute ? true : false;

        // check if visiting user can review the user of the profile they are visiting
        let canReview = false;
        let mutualProjects;
        if (
            typeof usernameFromToken === 'string' &&
            usernameFromRoute !== usernameFromToken
        ) {
            mutualProjects = [];
            const { rows: projects, rowCount: hasMutualProjects } =
                await pool.query(
                    '\
                SELECT \
                    "ProjectMember".project_id AS "projectId", \
                    "Project".name AS "projectName" \
                FROM "ProjectMember" \
                JOIN "Project" ON "Project".id = "ProjectMember".project_id \
                WHERE "ProjectMember".username IN ($1, $2) \
                GROUP BY ("ProjectMember".project_id, "Project".name) \
                HAVING COUNT("ProjectMember".project_id) > 1\
                ',
                    [usernameFromToken, usernameFromRoute]
                );
            if (hasMutualProjects) {
                canReview = await checkReviewability(usernameFromToken, usernameFromRoute);
                mutualProjects = projects;
            }
        }

        const userInfo = {
            ...basicInfo['0'],
            links: links,
            interests: interests,
            projectFollowings: projectFollowings,
            projectMemberships: projectMemberships,
            reviews: reviews,
            skills: skills,
            visitingUserMutualProjects: mutualProjects,
            canEdit: canEdit,
            canReview: canReview,
        };

        return res.status(200).json(userInfo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = getUserInfo;
