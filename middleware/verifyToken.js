const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token)
  if (!token) return res.status(401).send("Access Denied");
  try {
    req.verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
    next()
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
}

module.exports = {
  verifyToken
}