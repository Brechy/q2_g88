'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/q2_db'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/q2_db'
  }

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL
  // }
};
