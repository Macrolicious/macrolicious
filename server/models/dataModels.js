const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

const query = (text, params, callback) => {
  console.log('executed query');
  return pool.query(text, params).catch((e) => {
    console.error('Error executing query', e.stack);
    throw e;
  });
}

const end = () => pool.end();

export default { query, end };