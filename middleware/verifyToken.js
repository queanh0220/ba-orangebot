const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) return res.status(401).send("Access Denied");
   jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).send("Token Expired");
      }
      return res.status(401).send("Invalid Token");
    }
    req.verify = decode;
    next();
  });
};

module.exports = {
  verifyToken,
};
