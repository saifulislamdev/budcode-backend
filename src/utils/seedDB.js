const axios = require('axios');

const PROXY = process.env.PROXY || 'http://localhost:5000/api';

const options = [
    {
        method: 'POST',
        url: `${PROXY}/auth/signup`,
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
        url: `${PROXY}/auth/signup`,
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
    {
        method: 'POST',
        url: `${PROXY}/auth/signup`,
        headers: { 'Content-Type': 'application/json' },
        data: {
            username: 'janedoe',
            password: 'janedoe',
            email: 'janedoe@gmail.com',
            firstName: 'Jane',
            lastName: 'Doe',
            gender: 'Female',
        },
    },
    {
        method: 'POST',
        url: `${PROXY}/auth/signup`,
        headers: { 'Content-Type': 'application/json' },
        data: {
            username: 'bob',
            password: 'cat',
            email: 'bob@gmail.com',
            firstName: 'Bob',
            lastName: 'Johnson',
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
