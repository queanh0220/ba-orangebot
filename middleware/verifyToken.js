const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token)
  if (!token) return res.status(401).send("Access Denied");
  try {
    req.verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
    next()
  } catch (err) {
    if(err.name === 'TokenExpiredError')
    {
      return res.status(401).send("Token Expired");
    }
    return res.status(401).send("Invalid Token");
  }
}

module.exports = {
  verifyToken
}