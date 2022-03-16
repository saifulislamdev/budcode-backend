const format = require('pg-format');
const { pool } = require('../../../utils/db');
const verifyNewLinks = require('../../../helpers/editLinks');

// TODO: editing username and password could have been done below

const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            firstName,
            lastName,
            email,
            bio,
            occupation,
            gender,
            links,
            interests,
            skills,
        } = req.body;

        // verify user is attempting to edit their own profile
        if (req.username !== id)
            return res
                .status(401)
                .json({ msg: "You cannot edit another user's profile" });

        if (typeof firstName === 'string')
            await pool.query(
                'UPDATE "User" SET first_name = $1 WHERE username = $2',
                [firstName, id]
            );

        if (typeof lastName === 'string')
            await pool.query(
                'UPDATE "User" SET last_name = $1 WHERE username = $2',
                [lastName, id]
            );

        if (typeof email === 'string')
            await pool.query(
                'UPDATE "User" SET email = $1 WHERE username = $2',
                [email, id]
            );

        if (typeof bio === 'string')
            await pool.query('UPDATE "User" SET bio = $1 WHERE username = $2', [
                bio,
                id,
            ]);

        if (typeof occupation === 'string')
            await pool.query(
                'UPDATE "User" SET occupation = $1 WHERE username = $2',
                [occupation, id]
            );

        if (typeof gender === 'string')
            await pool.query(
                'UPDATE "User" SET gender = $1 WHERE username = $2',
                [gender, id]
            );

        // if there is an error with the structure of links,
        // the function sends a response with 400 status code
        if (Array.isArray(links)) {
            // delete all links currently stored for user
            await pool.query('DELETE FROM "UserLink" WHERE username = $1', [
                id,
            ]);
            console.log(links);
            if (links.length) {
                // get placeholders and parameters for insert statement
                const { parameterPlaceholders, parameters } = verifyNewLinks(
                    links,
                    id,
                    res
                );
                // add links passed in through body
                await pool.query(
                    `INSERT INTO "UserLink" (username, link, type) VALUES ${parameterPlaceholders}`,
                    parameters
                );
            }
        }

        if (Array.isArray(interests)) {
            // delete all interests currently stored for user
            await pool.query('DELETE FROM "UserInterest" WHERE username = $1', [
                id,
            ]);
            if (interests.length) {
                // add interests passed in body
                const values = interests.map((interest) => {
                    return [id, interest];
                });
                await pool.query(
                    format(
                        'INSERT INTO "UserInterest" (username, interest) VALUES %L',
                        values
                    )
                );
            }
        }

        if (Array.isArray(skills)) {
            // delete all skills currently stored for user
            await pool.query('DELETE FROM "UserSkill" WHERE username = $1', [
                id,
            ]);
            if (skills.length) {
                // add skills passed in body
                const values = skills.map((skill) => {
                    return [id, skill];
                });
                await pool.query(
                    format(
                        'INSERT INTO "UserSkill" (username, skill) VALUES %L',
                        values
                    )
                );
            }
        }

        return res.sendStatus(204);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

module.exports = editUser;
