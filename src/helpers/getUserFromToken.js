// Obtain user information from token
// An exception will be thrown for invalid tokens in more than one case

const jwt = require('jsonwebtoken');

const getUserFromToken = (bearerToken) => {
    // if no bearer token passed in
    if (typeof bearerToken === 'undefined')
        throw new Error('No token, authorization denied');

    // get rid of "Bearer " prefix
    bearerToken = bearerToken.split(' ');
    const bearerText = bearerToken[0];
    const token = bearerToken[1];

    // verify proper token
    if (typeof token === 'undefined' || bearerText !== 'Bearer')
        throw new Error('Specify a Bearer Token');

    // parse username from token
    let username;
    try {
        username = jwt.verify(token, process.env.JWT_SECRET).username;
    } catch (err) {
        throw new Error('Invalid token, authorization denied');
    }

    return username;
};

module.exports = getUserFromToken;
