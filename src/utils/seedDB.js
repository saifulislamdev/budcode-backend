const createUsers = require('./mock_data/createUsers');

// Seeding DB with mock data
const seed = async () => {
    await createUsers();
};

module.exports = seed;
