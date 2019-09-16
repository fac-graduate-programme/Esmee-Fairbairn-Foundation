const { Pool } = require('pg')

const connectionString = process.env.DATABASE_URL;

if (!connectionString) throw new Error('DATABASE_URL is not found!');

const options = {
  connectionString,
  ssl: true,
}

module.exports = new Pool(options)
