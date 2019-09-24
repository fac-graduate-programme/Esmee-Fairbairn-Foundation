const router = require('express').Router();

const postAnswers =require('./routes/postAnswers')
const getQuestions = require('./routes/getQuestions.js')
const charitybaseReq = require('./routes/charitybaseReq')

router.post('/answers', postAnswers);
router.get('/questions', getQuestions);  
router.get('/charitybase', charitybaseReq);
module.exports = router;
