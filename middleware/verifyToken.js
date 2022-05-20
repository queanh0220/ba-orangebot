export const verifyToken = (req, res, next) => {
    const token = req.header("token");
  if (!token) return response.status(401).send("Access Denied");
  
  try {
    req.verify = jwt.verify(token, process.env.JWT_SECRET_KEY);
    next()
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
  console.log("verify", verify);
}