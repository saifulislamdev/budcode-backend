const dotenv = require('dotenv');
const path = require('path');

const createJoinRequests = require('./mock_data/createJoinRequests');
const createProjects = require('./mock_data/createProjects');
const createProjectFollowers = require('./mock_data/createProjectFollowers');
const createProjectUpdates = require('./mock_data/createProjectUpdates');
const createUsers = require('./mock_data/createUsers');
const createUsersMockData = require('./mock_data/createUsers');
const createUserReviews = require('./mock_data/createUserReviews');
const handleJoinRequests = require('./mock_data/handleJoinRequests');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

// Seeding DB with mock data
const seed = async () => {
    if (process.env.MOCK_DATA_INSERTION === 'true') {
        await createUsers();
        await createUsersMockData();
        await createProjects();
        await createProjectFollowers();
        await createProjectUpdates();
        await createJoinRequests();
        await createUserReviews();
        await handleJoinRequests();
    }
};

module.exports = seed;
