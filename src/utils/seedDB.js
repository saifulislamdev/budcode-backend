const createProjects = require('./mock_data/createProjects');
const createUsersMockData = require('./mock_data/createUsersMockData');

const seed = async () => {
    await createUsersMockData();
    await createProjects();
};

module.exports = seed;
