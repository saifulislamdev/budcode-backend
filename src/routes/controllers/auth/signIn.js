const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { pool } = require('../../../utils/db');
const validatingBodyContent = require('../../../helpers/validatingBodyContent');

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;

        // verify if enough info is passed in through request body
        const required = {
            username: username,
            password: password,
        };
        validatingBodyContent(required, res);

        // verify matching username
        const query =
            'SELECT username, password FROM "User" WHERE username = $1';
        const { rowCount, rows } = await pool.query(query, [username]);
        if (rowCount === 0)
            return res.status(400).json({ msg: 'No matching user found' });

        // verify matching password
        const { password: hashedPassword } = rows[0];
        const hasPasswordMatch = await bcrypt.compare(password, hashedPassword);
        if (!hasPasswordMatch)
            return res.status(400).json({ msg: 'No matching user found' });

        const user = {
            username: username,
        };
        const token = jwt.sign(user, process.env.JWT_SECRET);
        return res.status(201).json({ token: token, msg: 'Login successful' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = signIn;
