

module.exports = async (req, res, next) => {

res.send({
    data: process.env.CHARITYBASE,
    statusCode: 200
})


}