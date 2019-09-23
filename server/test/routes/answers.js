const test = require('tape')
const request = require('supertest')
 
const app = require('../../app.js')

test('Post /api/v1/answers', function (assert) {
    request(app)
      .post('/api/v1/answers')
      .send({answer1: 'test', answer2: 'test', answer3: 'test' })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        assert.error(err, 'No error')
        assert.equal(res.body.data, 'ok', '/api/v1/answers works')
        assert.end();
      })
  })

