const models = require('../models');
const { pool } = require('./db');

const createTables = async () => {
    // creates tables that are used in the app
    for (const [name, creationStatement] of Object.entries(models)) {
        try {
            await pool.query(creationStatement);
            console.log(`Table/Extension: ${name} created or exists already`);
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = createTables;
