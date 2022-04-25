const createUsersMockData = require('./mock_data/createUsersMockData');

const seed = async () => {
    await createUsersMockData();
};

module.exports = seed;
