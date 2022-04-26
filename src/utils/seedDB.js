const createUsers = require('./mock_data/createUsers');
const createProjectFollowers = require('./mock_data/createProjectFollowers');

// Seeding DB with mock data
const seed = async () => {
    await createUsers();
    await createProjectFollowers();
};

module.exports = seed;
