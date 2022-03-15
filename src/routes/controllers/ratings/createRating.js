const validatingBodyContent = require('../../../helpers/validatingBodyContent');
const checkReviewability = require('../../../helpers/checkReviewability');

const { pool } = require('../../../utils/db');

const createRating = async (req, res) => {
    try {
        const { username } = req;
        const { reviewed_username, subject, body } = req.body;
        const required = {
            reviewed_username,
            subject,
            body,
        };
        validatingBodyContent(required, res);

        // put into helper function later
        const canReview = await checkReviewability(username, reviewed_username);

        if (!canReview) {
            return res.status(403).json({msg: `User ${username} cannot leave a review for ${reviewed_username}`});
        }

        let promises = [];
        promises.push(
            await pool.query(
                `INSERT INTO "UserReview" 
                    (reviewed_username, reviewer_username, subject, body)
                    VALUES ($1, $2, $3, $4)`,
                [reviewed_username, username, subject, body]
            )
        );

        // notify user
        promises.push(
            await pool.query(
                `INSERT INTO "UserNotification"
                    (username, subject, body, type)
                    VALUES ($1, $2, $3, $4)`,
                [
                    reviewed_username,
                    'Review received',
                    'A review was left on your profile page.',
                    'Review',
                ]
            )
        );

        Promise.all(promises);
        return res.status(201).json({ msg: 'Rating created' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = createRating;
