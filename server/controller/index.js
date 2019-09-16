const router = require('express').Router();

const postAnswers =require('./routes/postAnswers')
const getQuestions = require('./routes/getQuestions.js')

router.post("/answers", postAnswers);
router.get('/questions', getQuestions)  

module.exports = router;
