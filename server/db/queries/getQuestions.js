const connection = require('../config/connection');

const getQuestions = () => connection.query('SELECT Name, title__c, wordsLimit__c, tips__c, expectations__c FROM  salesforce.questions__c')

module.exports = getQuestions
