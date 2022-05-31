const jwt = require("jsonwebtoken");
const generateToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: 2 * 60 * 60,
  });
};

module.exports = generateToken
