/** Shared config for application; can be req'd many places. */

require('dotenv');

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

const username = 'postgres'; // Replace with your PostgreSQL username
const password = '123'; // Replace with your PostgreSQL password
const port = '5432'; // Replace with your PostgreSQL port

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? `postgresql://${username}:${password}@localhost:${port}/bankly_test`
    : `postgresql://${username}:${password}@localhost:${port}/bankly`;

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
