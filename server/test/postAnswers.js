 const test = require("tape");

 const runDbBuild = require("../model/build");
const addAnswer = require("../queries/postAnswers");

const testAnswer = { answer1 : "answer for question 1", answer2 :"answer for question 1", answer3 : "answer for question 1" }; 
test("add Test Answer", t => {
    runDbBuild()
      .then(
        addAnswer(testAnswer)
          .then(response => {
            t.equal(response.name, 2, "response.name should be 2");
            t.end();
          })
          .catch(error => t.error(error))
      )
      .catch(error => console.log(error));
  });