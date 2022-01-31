const models = require('../models');
const { pool } = require('./db');

// TODO: figure out why tables aren't being created in one go
// (need to save file multiple times to create all the tables)

const createTables = async () => {
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
