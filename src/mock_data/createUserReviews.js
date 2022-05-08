const { pool } = require('../utils/db');
const usersReviews = require('./usersReviews');

// Creates mock user reviews data
const createUserReviewsMockData = async () => {
    try {
        const { rows: recordsCount } = await pool.query(
            'SELECT COUNT(*) FROM "UserReview"'
        );

        // Don't insert mock data if there is enough records already
        if (recordsCount[0]['count'] >= 9) return;

        console.log('Mock data: Creating reviews for users...');

        for (const userReview of usersReviews) {
            // Inner try-catch to make sure if one statement fails, the subsequent ones don't halt
            try {
                // Insert new record (if not added already)
                await pool.query(
                    '\
                    INSERT INTO "UserReview"\
                    (reviewed_username, reviewer_username, subject, body)\
                    VALUES ($1, $2, $3, $4)\
                    ',
                    [
                        userReview.reviewed_username,
                        userReview.reviewer_username,
                        userReview.subject,
                        userReview.body,
                    ]
                );
            } catch (err) {
                console.log(err);
            }
        }

        console.log('Mock data: Finished creating reviews for users');
    } catch (err) {
        console.log(err);
    }
};

module.exports = createUserReviewsMockData;
