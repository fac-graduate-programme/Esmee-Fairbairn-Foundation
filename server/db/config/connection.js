const { Pool } = require('pg')

const connectionString = process.env.DATABASE_URL;

if (!connectionString) throw new Error('DATABASE_URL is not found!');

module.exports = new Pool({
  connectionString,
  ssl: true,
})
