const axios = require('axios');

const signUpRequestsOptions = require('./mock_data/signUp');

const options = [].concat(signUpRequestsOptions);

const seed = async () => {
    options.map(async (currReqOptions, i) => {
        try {
            await axios.request(currReqOptions);
        } catch (err) {}
    });
};

module.exports = seed;
