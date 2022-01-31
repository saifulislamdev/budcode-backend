const axios = require('axios');

const PROXY = process.env.PROXY || 'http://localhost:5000';

const options = [
    {
        method: 'POST',
        url: `${PROXY}/api/auth/signup`,
        headers: { 'Content-Type': 'application/json' },
        data: {
            username: 'saifulislam',
            password: 'budcodeisawesome',
            email: 'nysaifulislam@gmail.com',
            firstName: 'Saiful',
            lastName: 'Islam',
            gender: 'Male',
        },
    },
    {
        method: 'POST',
        url: `${PROXY}/api/auth/signup`,
        headers: { 'Content-Type': 'application/json' },
        data: {
            username: 'johndoe',
            password: 'johndoe',
            email: 'johndoe@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            gender: 'Male',
        },
    },
];

const seed = async () => {
    options.map(async (currReqOptions, i) => {
        try {
            await axios.request(currReqOptions);
        } catch (err) {}
    });
};

module.exports = seed;
