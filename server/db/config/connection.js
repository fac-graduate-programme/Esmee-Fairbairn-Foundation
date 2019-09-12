const { Pool } = require('pg')
const { parse } = require('url')
require('dotenv').config()

const params = parse(process.env.DATABASE_URL);
const [user, password] = params.auth.split(':')
const { path, hostname: host, port } = params

const config = {
  user,
  password,
  database: path.split('/')[1],
  host,
  port,
  ssl: !(host === 'localhost'),
}

module.exports = new Pool(config)
