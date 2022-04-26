const bcrypt = require('bcrypt');
const { pool } = require('../db');
const usersInfos = require('./users');

// Creates mock user data
const createUsersMockData = async () => {
    try {
        let promises = [];

        const salt = await bcrypt.genSalt();

        for (const userInfo of usersInfos) {
            const hashedPassword = await bcrypt.hash(userInfo.password, salt);

            // Inner try-catch to make sure if one statement fails, the subsequent ones don't
            try {
                await pool.query(
                    '\
                    INSERT INTO "User"\
                        (username, password, first_name, last_name, email, bio, occupation, gender)\
                    VALUES\
                        ($1, $2, $3, $4, $5, $6, $7, $8)\
                    ',
                    [
                        userInfo.username,
                        hashedPassword,
                        userInfo.first_name,
                        userInfo.last_name,
                        userInfo.email,
                        userInfo.bio,
                        userInfo.occupation,
                        userInfo.gender,
                    ]
                );

                if (userInfo.links)
                    for (const link of userInfo.links) {
                        promises.push(
                            pool.query(
                                'INSERT INTO "UserLink"(username, link, type) VALUES ($1, $2, $3)',
                                [userInfo.username, link.link, link.type]
                            )
                        );
                    }

                if (userInfo.interests)
                    for (const interest of userInfo.interests) {
                        promises.push(
                            pool.query(
                                'INSERT INTO "UserInterest"(username, interest) VALUES($1, $2)',
                                [userInfo.username, interest]
                            )
                        );
                    }

                if (userInfo.skills)
                    for (const skill of userInfo.skills) {
                        promises.push(
                            pool.query(
                                'INSERT INTO "UserSkill"(username, skill) VALUES($1, $2)',
                                [userInfo.username, skill]
                            )
                        );
                    }
            } catch (err) {}
        }

        await Promise.all(promises);
    } catch (err) {}
};

module.exports = createUsersMockData;
