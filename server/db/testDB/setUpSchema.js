const { exec } = require('child_process');
const runDbBuild = require('./build');

console.log('Creating test schema...');

exec(
  `psql psql postgres://salesforcetester:test@localhost:5432/salesforcetest  
  <<EOF
\\x
CREATE SCHEMA salesforce; 
SET search_path TO salesforce, public;
EOF`,

  error => {
    if (error) {
      console.log(error);
    } else {
      console.log('Created salesforce schema');
    }
    runDbBuild()
      .then(() => {
        console.log('Successfully populated test database');
        process.exit(0);
      })
      .catch(console.log);
  }
);
