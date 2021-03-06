'use strict'
// I should probably figure out what all this testing stuff is about

// var should = require('should')
var app = require('../../app')
var request = require('supertest')

describe('GET /api/polls', function () {
  it('should respond with JSON array', function (done) {
    request(app)
      .get('/api/polls')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err)
        res.body.should.be.instanceof(Array)
        done()
      })
  })
})
