const handleError = (err, req, res, next) => {
    console.log("err", err)
    res.status(500).send("something went wrong")
  }

module.exports = handleError