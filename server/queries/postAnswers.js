 
const db = require("../model/connection");


const postAnswer = ({ answer1, answer2, answer3 }) => {

    return db
    .query( "INSERT INTO application__c ( question_1__c,  question_2__c  ,question_3__c ) VALUES ($1, $2, $3 ) RETURNING name",
    [ answer1, answer2, answer3 ] )
    .then(response => {
        return response.rows[0];
      }); }

        
      
module.exports = postAnswer;