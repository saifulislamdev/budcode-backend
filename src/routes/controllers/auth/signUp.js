const bcrypt = require('bcrypt');
const { pool } = require('../../../utils/db');
const validatingBodyContent = require('../../../helpers/validatingBodyContent');

const areArraysEqual = (arr1, arr2) => {
    return (
        arr1.length === arr2.length &&
        arr1.every((value, index) => value === arr2[index])
    );
};

const signUp = async (req, res) => {
    try {
        const {
            username,
            password,
            email,
            firstName,
            lastName,
            gender,
            links,
            interests,
            skills,
        } = req.body;

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
        const newUserStatement =
            'INSERT INTO "User"(username, password, first_name, last_name, email, gender) \
            VALUES($1, $2, $3, $4, $5, $6)';
        await pool.query(newUserStatement, [
            username,
            hashedPassword,
            firstName,
            lastName,
            email,
            gender,
        ]);

        // add new user's links (if passed in body)
        if (Array.isArray(links) && links.length) {
            // parameterPlaceholders becomes ["($1, $2, $3)", "($1, $4, $5)", ...]
            const parameterPlaceholders = links.map((link, i) => {
                return `($1, $${(i + 1) * 2}, $${(i + 1) * 2 + 1})`;
            });

            // TODO: below can be refactored
            // gather attributes of links in a 1D array to pass as parameters into insert statement
            const linksToFlatArray = links
                .map((linkAttributes) => {
                    // gather link attributes in same order as order in insert statement
                    const sortedKeys = Object.keys(linkAttributes).sort();
                    if (!areArraysEqual(sortedKeys, ['link', 'type']))
                        return res
                            .status(400)
                            .json({ msg: 'Improper format of links' });
                    // returns each link attribute
                    return sortedKeys.map(
                        (attribute) => linkAttributes[attribute]
                    );
                })
                .flat();

            // add links passed in through body
            const parameters = [username].concat(linksToFlatArray);
            await pool.query(
                `INSERT INTO "UserLink" (username, link, type) VALUES ${parameterPlaceholders}`,
                parameters
            );
        }

        // add new user's interests (if passed in body)
        if (Array.isArray(interests) && interests.length) {
            // parameterPlaceholders becomes ["($1, $2)", "($1, $3)", ...]
            const parameterPlaceholders = interests.map((interest, i) => {
                return `($1, $${i + 2})`;
            });

            // add interests passed in through body
            const parameters = [username].concat(interests);
            await pool.query(
                `INSERT INTO "UserInterest" (username, interest) VALUES ${parameterPlaceholders}`,
                parameters
            );
        }

        // add new user's skills (if passed in body)
        if (Array.isArray(skills) && skills.length) {
            // parameterPlaceholders becomes ["($1, $2)", "($1, $3)", ...]
            const parameterPlaceholders = skills.map((skill, i) => {
                return `($1, $${i + 2})`;
            });

            // add skills passed in through body
            const parameters = [username].concat(skills);
            await pool.query(
                `INSERT INTO "UserSkill" (username, skill) VALUES ${parameterPlaceholders}`,
                parameters
            );
        }

        return res.status(201).json({ msg: 'Created successfully' });
    } catch (err) {
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = signUp;
