const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
    try {
        let token = req.headers['authorization']; // token comes in an authorization header

        // if no token passed in
        if (typeof token === 'undefined')
            return res
                .status(401)
                .json({ msg: 'No token, authorization denied' });

        token = token.split(' ')[1]; // get rid of "Bearer " prefix
        const { username } = jwt.verify(token, process.env.JWT_SECRET);
        req.username = username; // send user info to the next middleware function or the controller
        next();
    } catch (err) {
        return res
            .status(401)
            .json({ msg: 'Invalid token, authorization denied' });
    }
};

module.exports = authenticateToken;
