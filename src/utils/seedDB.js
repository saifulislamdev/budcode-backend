const createUsers = require('./mock_data/createUsers');
const createProjectFollowers = require('./mock_data/createProjectFollowers');
const createProjectUpdates = require('./mock_data/createProjectUpdates');

// Seeding DB with mock data
const seed = async () => {
    await createUsers();
    await createProjectFollowers();
    await createProjectUpdates();
};

module.exports = seed;
