const addAnswer = require("../../db/queries/postAnswers");
const  yup = require('yup');

module.exports = (req, res, next) => {
  const answer1Array = req.body.answer1.trim().split(' ')
  const answer2Array = req.body.answer2.trim().split(' ')
  const answer3Array = req.body.answer3.trim().split(' ')
    
  const schema = yup.object().shape({
    answer1Array: yup.array().compact().min(1).max(200).required(),
    answer2Array: yup.array().compact().min(1).max(450).required(),
    answer3Array: yup.array().compact().min(1).max(350).required(),
  })

  try {
    schema
    .isValid({
      answer1Array, 
      answer2Array,
      answer3Array
    })
    .then(function(valid) {      
      if(valid === true) {
        const preValidatedAnswers = req.body;
        addAnswer(preValidatedAnswers).then(result => {
          if (Number.isInteger(result.rows[0].id)) {
            res.send({
              data: "ok",
              statusCode: 200
            });
          } else throw new Error('there is an error in regards addAnswer query');
        });
      } else {
        res.send({
          data: "Bad Request",
          statusCode: 400
        });
      }
    });
  } catch (err) {
    next(err);
  }
};
