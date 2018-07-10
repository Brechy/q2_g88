'use strict';
// process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app.js');
const expect = require('chai').expect;
const knex = require('../knex');


describe('Test app', function() {
  it('Responds with status 200', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
