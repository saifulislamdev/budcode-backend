const { Pool } = require('pg');
const path = require('path');

// import environment variables
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const { DB_USER, DB_HOST, DB_DATABASE, DB_PASS, DB_PORT } = process.env;

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASS,
  port: DB_PORT,
});

const verifyDBConnection = async () => {
  try {
    // connect with a connection pool
    const poolResult = await pool.query('SELECT NOW()');
    console.log('Database connected');
    console.log('Time connected: ' + poolResult.rows[0]['now']);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { pool, verifyDBConnection };
