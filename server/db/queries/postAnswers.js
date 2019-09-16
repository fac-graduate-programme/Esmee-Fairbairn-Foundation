const db = require("../config/connection");

const postAnswer = ({ answer1, answer2, answer3 }) => {
  return db.query(
    "INSERT INTO salesforce.application__c ( question_1__c,  question_2__c  ,question_3__c ) VALUES ($1, $2, $3 ) RETURNING id",
    [answer1, answer2, answer3]
  );
};

module.exports = postAnswer;
