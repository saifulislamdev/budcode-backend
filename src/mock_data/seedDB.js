const dotenv = require('dotenv');
const path = require('path');

const createJoinRequests = require('./createJoinRequests');
const createProjects = require('./createProjects');
const createProjectFollowers = require('./createProjectFollowers');
const createProjectUpdates = require('./createProjectUpdates');
const createUsers = require('./createUsers');
const createUserReviews = require('./createUserReviews');
const handleJoinRequests = require('./handleJoinRequests');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// Seeding DB with mock data
const seed = async () => {
    if (process.env.MOCK_DATA_INSERTION === 'true') {
        // Creating users
        await createUsers();

        // Creating projects
        // Relies on successful creation of users
        await createProjects();

        // Creating project followers
        // Relies on successful creation of users and projects
        await createProjectFollowers();

        // Creating project members for projects
        // Relies on successful creation of users and projects
        await createJoinRequests();
        // Relies on successful creation of join requests
        await handleJoinRequests();

        // Creation of project updates
        // Relies on successful handling of join requests
        await createProjectUpdates();

        // Creating user reviews
        // Relies on successful handling of join requests
        await createUserReviews();

        console.log(
            'Mock data: Mock data creation finished or enough data in tables already'
        );
    } else
        console.log(
            'To use mock data, set MOCK_DATA_INSERTION environment variable'
        );
};

module.exports = seed;
