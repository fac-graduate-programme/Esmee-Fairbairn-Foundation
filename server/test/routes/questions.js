'use strict'
 
const test = require('tape')
const request = require('supertest')
 
const app = require('../../app.js')

test('GET /api/v1/questions', function (assert) {
    request(app)
      .get('/api/v1/questions')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {

        const expectedLength = res.body.data.length;
       
        assert.error(err, 'No error')
        assert.equal(1, expectedLength, '/api/v1/question works fine!')
        assert.end();
      })
  })

