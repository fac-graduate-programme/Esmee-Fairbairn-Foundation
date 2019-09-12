const addAnswer = require('../queries/postAnswers')

module.exports = (req, res) => {

 const testAnswer = { answer1 : "answer for question 1", answer2 :"answer for question 1", answer3 : "answer for question 1" }; 

 addAnswer(testAnswer).then(res => console.log(res))

}