const { Pool } = require('pg');
// will not have access to app.js for every test ie. testing database queries
require('dotenv').config();

let connectionString = process.env.DATABASE_URL;
if (process.env.NODE_ENV === 'test')
  connectionString = process.env.TRAVIS_DATABASE_URL;
if (process.env.NODE_ENV === 'local')
  connectionString = process.env.TEST_DATABASE_URL;

if (!connectionString) throw new Error('DATABASE_URL is not found!');

const options = {
  connectionString,
  ssl: !connectionString.includes('localhost')
};

module.exports = new Pool(options);
