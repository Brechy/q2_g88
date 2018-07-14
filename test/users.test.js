process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const knex = require('../knex');

knex.migrate.rollback()
.then(() => knex.migrate.latest())
.then(() => knex.seed.run())
.then(() => knex.select().from('users'))
.finally(() => knex.destroy());

describe('GET /users', () => {
  it('should return JSON', done => {
    request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .expect(200, done)
  })
})
