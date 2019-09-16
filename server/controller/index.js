const router = require('express').Router();

const getQuestions = require('./routes/getQuestions.js')

router.get('/questions', getQuestions)  

module.exports = router;
