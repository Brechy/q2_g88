'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/fam_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/fam_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
