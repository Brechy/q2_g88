'use strict';
const request = require('supertest');
const app = require('../app.js');
const expect = require('chai').expect;
const knex = require('../knex');



// This is a test for user bio route signu2
describe('GET /signup2', () => {
    it('responds with html', done => {
        request(app)
            .get('/signup2')
            .expect('Content-Type', /text.html/)
            .expect(200, done);
    });
});
