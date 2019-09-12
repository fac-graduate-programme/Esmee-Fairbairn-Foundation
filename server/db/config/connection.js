const { Pool } = require("pg");

let connectionString = process.env.DATABASE_URL;

if (!connectionString) throw new Error("Database url must be set");

module.exports = new Pool({
  connectionString,
  ssl: !connectionString.includes("localhost")
});
