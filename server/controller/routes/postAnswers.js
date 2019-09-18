const addAnswer = require("../../db/queries/postAnswers");

module.exports = (req, res, next) => {
  try {

    // this is if we send all the answers as a object in the post body
    // the structure needs to be { answer1, answer2, answer3 } = req.body.data;

    const preValidatedAnswers = req.body;
    addAnswer(preValidatedAnswers).then(result => {
        // addAnswers returns the id which is auto generated int - this means the SQL database hase processed correctly 
      if (Number.isInteger(result.rows[0].id)) {
        res.send({
          data: "ok",
          statusCode: 200
        });
      } else throw new Error('there is an error in regards addAnswer query');
    });
  } catch (err) {
    next(err);
  }
};
