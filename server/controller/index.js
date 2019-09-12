const router = require('express').Router();
const postAnswers =require('./routes/postAnswers')


router.post("/answers", postAnswers);

module.exports = router;
