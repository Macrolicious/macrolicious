const { Pool } = require('pg')
//this loads the .env file //note: .env is never uploaded to github
const dotenv = require('dotenv')

//.env file
dotenv.config()

const pool = new Pool({
	connectionString: process.env.PG_URI,
})

const query = (text, params, callback) => {
	console.log('executed query')
	return pool.query(text, params).catch((e) => {
		console.error('Error executing query', e.stack)
		throw e
	})
}

const end = () => pool.end()

module.exports = { query, end, pool }
