const request = require('supertest');
const app = require('../app.js');

describe('Test app', function() {
  it('Responds with status 200', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
