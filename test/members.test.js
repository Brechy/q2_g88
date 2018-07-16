const request = require('supertest');
const app = require('../app');

describe('members', () => {
  it('should return html', done => {
    request(app)
    .get('/members')
    .expect('Content-Type', /html/)
    .expect(200, done)
  })
})
