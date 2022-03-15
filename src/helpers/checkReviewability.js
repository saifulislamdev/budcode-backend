const { pool } = require('../utils/db');

const checkReviewability = async (reviewer, reviewed) => {

    // check if users share any completed projects
    const {rowCount : mutuallyCompleted} = await pool.query(
        `SELECT project_id 
            FROM "ProjectMember" 
            JOIN "Project"
            ON project_id = id
            WHERE username IN ($1, $2)
            AND status = 'Complete' 
            GROUP BY project_id 
            HAVING COUNT(DISTINCT username) > 1`,
            [reviewer, reviewed]
    );

    if (mutuallyCompleted) {

        // check if user has already reviewed the target user
        const {rowCount : reviewExists} = await pool.query(
            `SELECT 1 
                FROM "UserReview" 
                WHERE reviewer_username = $1
                AND reviewed_username = $2`,
                [reviewer, reviewed]
        );
        
        if (!reviewExists) {
            return true;
        }
    }

    return false;
};

module.exports = checkReviewability;