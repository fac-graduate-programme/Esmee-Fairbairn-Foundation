const connection = require('../config/connection');

const getQuestionsQuery = () => connection.query('SELECT Question__c, wordsLimit__c, tips__c, expectations__c FROM  salesforce.Question__c')

module.exports = getQuestionsQuery
