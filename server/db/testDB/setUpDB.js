const { exec } = require('child_process');
const runDbBuild = require('./build');

console.log('Creating test database...');

exec(
  `psql <<EOF
\\x
CREATE DATABASE salesforcetest; 
CREATE USER salesforcetester WITH SUPERUSER PASSWORD 'test';
ALTER DATABASE salesforcetest OWNER TO salesforcetester;
EOF`,

  error => {
    if (error) {
      console.log(error);
    } else {
      console.log('Created database salesforcetest');
      process.exit(0);
    }
  }
);
