const getQuestions = require('../../db/queries/getQuestions')
const  splitString = require('../utils/splitString')

module.exports = async (req, res, next) => {

  try {
    const questions = await getQuestions()
    
    const newQuestionsArray = questions.rows.map(question => {

        const newTips = splitString(question.tips__c)
        const newExpectations = splitString(question.expectations__c)

        return ({
          title: question.title__c,
          tips: newTips,
          expectations: newExpectations,
          wordsLimit: question.wordslimit__c,
        })
      })
          
    res.send({
      data: newQuestionsArray,
      statusCode: 200,
    });
  } catch (err) {
    next(err)
  }
}
