const test = require("tape");

const runDbBuild = require("../../db/testDB/build");
const getQuestions = require("../../db/queries/getQuestions");
const addAnswer = require("../../db/queries/postAnswers");

const testResponse = {
  question__c: "Test Question",
  wordslimit__c: 250,
  tips__c: "Test tips",
  expectations__c: "Test expectations"
};

test("Get Test Questions", t => {
  runDbBuild()
    .then(
      getQuestions()
        .then(response => {
          t.deepEqual(response.rows[0], testResponse, "response should be the same as hard coded response");
          t.end();
        })
        .catch(error => t.error(error))
    )
    .catch(error => console.log(error));
});




const testAnswer = { answer1 : "answer for question 1", answer2 :"answer for question 1", answer3 : "answer for question 1" }; 
test("add Test Answer", t => {
   runDbBuild()
     .then(
       addAnswer(testAnswer)
         .then(response => {
           t.equal(response.id, 2, "response.name should be 2");
           t.end();
         })
         .catch(error => t.error(error))
     )
     .catch(error => console.log(error));
 });