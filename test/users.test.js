const request = require('supertest');
const app = require('../app');
const knex = require('../knex');

knex.migrate.rollback()
.then(() => knex.migrate.latest())
.then(() => knex.seed.run())
.then(() => knex.select().from('users'))
.then(data => console.log(data))
.then(() => {})

// describe('should be')
