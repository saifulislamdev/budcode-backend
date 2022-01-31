const { Pool } = require('pg');
const path = require('path');

// import environment variables
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const { PGUSER, PGHOST, PGDATABASE, PGPASS, PGPORT } = process.env;

const pool = new Pool({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASS,
    port: PGPORT,
});

const verifyDBConnection = async () => {
    try {
        // connect with a connection pool
        const { rows } = await pool.query('SELECT NOW()');
        console.log('Database connected');
        console.log('Time connected: ' + rows[0]['now']);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { pool, verifyDBConnection };
