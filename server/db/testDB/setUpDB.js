const { exec } = require("child_process");
const runDbBuild = require("./build");


console.log("Creating test database...");

exec(
  `psql <<EOF
\\x
CREATE DATABASE salesforcetest; 
CREATE SCHEMA salesforce;
SET search_path TO salesforce, public;
CREATE USER salesforcetester WITH SUPERUSER PASSWORD 'test';
ALTER DATABASE salesforcetest OWNER TO salesforcetester;
EOF`,

  error => {
    if (error) {
      console.log(error);
    } else {
      console.log("Created database salesforcetest");
    }
    runDbBuild()
      .then(() => {
        console.log("Successfully populated test database");
        process.exit(0); 
      })
      .catch(console.log(error));
  }
);