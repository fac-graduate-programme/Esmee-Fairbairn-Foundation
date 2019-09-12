const getQuestionsQuery = require('../../db/queries/getQuestionsQuery')
const  splitString = require('../utils/splitString')
let newArrayOfQuestionsObject = []

module.exports = async (req, res, next) => {
  try {
    const questions = await getQuestionsQuery();

      newArrayOfQuestionsObject = questions.rows.map(question => {

        const newTips = splitString(question.tips__c)
        const newExpectations = splitString(question.expectations__c)

        return ({
          ...question, 
          tips__c: newTips,
          expectations__c: newExpectations,
        })
      })
    
    res.send({
      questions: newArrayOfQuestionsObject,
      statusCode: 200,
    });
  } catch (err) {
    next(err)
  }
}
