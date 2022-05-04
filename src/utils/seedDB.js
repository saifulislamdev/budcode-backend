const dotenv = require('dotenv');
const path = require('path');

const createJoinRequests = require('./mock_data/createJoinRequests');
const createProjects = require('./mock_data/createProjects');
const createUsersMockData = require('./mock_data/createUsers');
const handleJoinRequests = require('./mock_data/handleJoinRequests');


require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const seed = async () => {
    if(process.env.MOCK_DATA_INSERTION === 'true') {
        await createUsersMockData();
        await createProjects();
        await createJoinRequests();
        await handleJoinRequests();
    }
};

module.exports = seed;
