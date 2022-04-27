const createUsers = require('./mock_data/createUsers');
const createProjectFollowers = require('./mock_data/createProjectFollowers');
const createProjectUpdates = require('./mock_data/createProjectUpdates');
const createUserReviews = require('./mock_data/createUserReviews');

// Seeding DB with mock data
const seed = async () => {
    await createUsers();
    await createProjectFollowers();
    await createProjectUpdates();
    await createUserReviews();
};

module.exports = seed;
