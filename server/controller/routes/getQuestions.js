const getQuestions = require('../../db/queries/getQuestions')
const  splitString = require('../utils/splitString')

module.exports = async (req, res, next) => {

  try {
    const questions = await getQuestions()
    
    let newQuestionsArray = []

    newQuestionsArray = questions.rows.map(question => {

        const newTips = splitString(question.tips__c)
        const newExpectations = splitString(question.expectations__c)

        return ({
          ...question, 
          tips__c: newTips,
          expectations__c: newExpectations
        })
      })
      
      let updatedNames = []

      updatedNames = newQuestionsArray.map(question => ({
        title: question.title__c,
        tips: question.tips__c,
        expectations: question.expectations__c,
        wordsLimit: question.wordslimit__c,        
      }))
    
    res.send({
      data: updatedNames,
      statusCode: 200,
    });
  } catch (err) {
    next(err)
  }
}
