const bcrypt = require('bcrypt');
const { pool } = require('../../../utils/db');
const validatingBodyContent = require('../../../helpers/validatingBodyContent');

const signUp = async (req, res) => {
    try {
        const { username, password, email, firstName, lastName, gender } =
            req.body;

        // verify if enough info is passed in through request body
        const required = {
            username: username,
            password: password,
            email: email,
            firstName: firstName,
        };
        validatingBodyContent(required, res);

        // verify if unique user (unique username and email)
        const query =
            'SELECT username, email FROM "User" WHERE username = $1 OR email = $2';
        const { rowCount, rows } = await pool.query(query, [username, email]);
        if (rowCount !== 0) {
            const matchingUser = rows[0];
            if (username === matchingUser.username)
                return res.status(400).json({ msg: 'Username already taken' });
            return res.status(400).json({ msg: 'Email already taken' });
        }

        // hash password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const statement = 'INSERT INTO "User" VALUES($1, $2, $3, $4, $5, $6)';
        await pool.query(statement, [
            username,
            hashedPassword,
            firstName,
            lastName,
            email,
            gender,
        ]);

        return res.status(201).json({ msg: 'Created successfully' });
    } catch (err) {
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = signUp;
