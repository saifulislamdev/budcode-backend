const { pool } = require('../../../utils/db');

const getNotificationsForUser = async (req, res) => {
    try {
        const { id: usernameFromRoute } = req.params;

        // verify user is attempting to get notifications for their account
        // (and not someone else's)
        if (req.username !== usernameFromRoute)
            return res
                .status(401)
                .json({ msg: "You cannot get another user's notifications" });

        const { rows: notifications } = await pool.query(
            `
            SELECT id, subject, body, type, created_at AS time
            FROM "UserNotification"
            WHERE username = $1
            ORDER BY created_at DESC
            `,
            [req.username]
        );

        return res.status(200).json({ notifications: notifications });
    } catch (err) {
        console.log(err);
    }
};

module.exports = getNotificationsForUser;
