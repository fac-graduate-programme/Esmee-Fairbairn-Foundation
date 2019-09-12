const router = require('express').Router();
const postAnswers =require('./postAnswers')


router.post("/answers", postAnswers);

module.exports = router;
