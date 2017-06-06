'use strict';

var app = require('../../app');
var request = require('supertest');

describe('GET /api/polls', function () {
  it('should respond with JSON array', function (done) {
    request(app).get('/api/polls').expect(200).expect('Content-Type', /json/).end(function (err, res) {
      if (err) return done(err);
      res.body.should.be.instanceof(Array);
      done();
    });
  });
});
//# sourceMappingURL=poll.spec.js.map