const fs = require("fs");
const dbConnection = require("../config/connection");

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

const runDbBuild = () =>
  new Promise((resolve, reject) => {
    // eslint-disable-next-line no-unused-vars
    dbConnection.query(sql, (err, res) => {
      if (err) reject(err);
      // eslint-disable-next-line no-console
      console.log("database being built");
      resolve(true);
    });
  });
  //runDbBuild();
module.exports = runDbBuild;
