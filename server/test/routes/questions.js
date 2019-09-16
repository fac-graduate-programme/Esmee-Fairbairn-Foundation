'use strict'
 
var test = require('tape')
var request = require('supertest')
 
var app = require('../../app.js')

const expectedResponse = {
    "data": [
        {
            "title": "What work will you deliver with the grant?",
            "tips": [
                "  Describe what funding will be spent on (specific post, project development, activities).",
                "  Describe who you’ll be working with (collaborations, partnerships, participant journey).",
                "  Describe the kind of work (advocacy, developing new models, core wor"
            ],
            "expectations": [
                "  Grants to individuals, including student grants or bursaries.",
                "  Capital costs including building work, renovations, and equipment (grants only, we may make social    investments for these).",
                "  Healthcare with a clinical basis."
            ],
            "wordsLimit": "450"
        },
        {
            "title": "A brief description of your organisation.",
            "tips": [
                "  Outline what your organisation does (including relevant track record).  We need to see that organisations are best placed to provide the work they do.    Evidence of past impact, and how  you’ve learned from it, helps us to make this judgement."
            ],
            "expectations": [
                " Organisations with a regular annual turnover of less than £50,000",
                " Organisations without at least three non-executive trustees or directors",
                " Animal welfare, zoos, captive breeding and animal rescue centres"
            ],
            "wordsLimit": "200"
        },
        {
            "title": "What is the change you are aiming to achieve?",
            "tips": [
                "  Outline the need for the work.",
                "  Explain how your work will have a wider impact (shared learning).",
                "  Explain how your work matches your chosen funding priority."
            ],
            "expectations": [
                "  Work that does not have a direct benefit in the UK.",
                "  Work that does not set out to have a wider impact beyond the lives of the direct beneficiaries.",
                "  Academic research unless the applicant can demonstrate real potential for practical outcomes."
            ],
            "wordsLimit": "350"
        }
    ],
    "statusCode": 200
}

test('GET /api/v1/questions', function (assert) {
    request(app)
      .get('/api/v1/questions')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        var expectedThings = expectedResponse;
        var actualThings = res.body
   
        assert.error(err, 'No error')
        assert.same(actualThings, expectedThings, '/api/v1/question works fine!')
        assert.end();
      })
  })

