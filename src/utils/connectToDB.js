const { Sequelize } = require('sequelize');
const path = require('path');

// import environment variables
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const { DB_DATABASE, DB_USER, DB_PASS, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS | null, {
  host: DB_HOST,
  dialect: 'postgres',
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectToDB;
