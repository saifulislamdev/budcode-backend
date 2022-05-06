const validatingBodyContent = require('../../../helpers/validatingBodyContent');
const { pool } = require('../../../utils/db');

const createUpdate = async (req, res) => {
    try {
        const { username } = req;
        const { id } = req.params;
        const { subject, body } = req.body;
        const required = {
            subject,
            body,
        };
        
        const { isValid, msg } = validatingBodyContent(required);
        if (!isValid) {
            return res.status(400).json({ msg: msg });
        }

        await pool.query(
            `INSERT INTO "ProjectUpdate" 
                (project_id, subject, body, author)
                VALUES ($1, $2, $3, $4)
            `,
            [id, subject, body, username]
        );

        return res.status(201).json({ msg: 'Update created' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = createUpdate;
