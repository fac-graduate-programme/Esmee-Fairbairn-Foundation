const { Pool } = require('pg')
// will not have access to app.js for every test ie. testing database queries 
require("dotenv").config();

let connectionString =
  process.env.NODE_ENV === "test" ?
  process.env.TEST_DATABASE_URL :
  process.env.DATABASE_URL;

if (!connectionString) throw new Error('DATABASE_URL is not found!');

const options = {
  connectionString,
  ssl: !connectionString.includes("localhost")
}

module.exports = new Pool(options)
