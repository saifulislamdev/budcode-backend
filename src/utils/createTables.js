const models = require('../models');
const { pool } = require('./db');

const createTables = async () => {
  // creates tables that are used in the app
  Object.entries(models).map((table) => {
    const name = table[0];
    const creationStatement = table[1];
    pool.query(creationStatement, (err, res) => {
      if (err) console.log(err);
      else console.log(`${name} table created`);
    });
  });
};

module.exports = createTables;
