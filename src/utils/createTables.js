const models = require('../models');
const { pool } = require('./db');

const createTables = () => {
    // creates tables that are used in the app
    Object.entries(models).map(async (table) => {
        try {
            const name = table[0];
            const creationStatement = table[1];
            await pool.query(creationStatement);
            console.log(`${name} table created`);
        } catch (err) {
            console.log(err);
        }
    });
};

module.exports = createTables;
