const md5 = require("md5");
const jwt = require("jsonwebtoken");
const userServices = require("../services/user");
const generateToken = require("../utils/generate-token");

const login = async (req, res) => {
  console.log("login");
  const user = await userServices.getUserByUsername(req.body);
  if (user) {
    if (md5(req.body.password) === user.password) {
      const token = generateToken({ _id: user._id });
      res.setHeader("Access-Control-Expose-Headers", "token");
      res.header("token", token).status(200).send("Login success");
    } else {
      res.status(401).send("wrong password");
    }
  } else {
    res.status(401).json("user not found").end();
  }
};

const getUser = async (req, res) => {
  console.log("get user");
  const result = await userServices.getUserById(req.verify._id);
  res.status(200).json(result).end();
};

const addUser = async (req, res) => {
  const user = await userServices.getUserByUsername(req.body.userName);
  if (user) {
    res.status(409).send("username already exists");
  }
  const newUser = await userServices.addUser(req.body);
  res.status(200).json(newUser.insertedId).end();
};

const updateUser = async (req, res) => {
  const result = await userServices.updateUser(req.verify._id, req.body);
  res.status(200).json(result).end();
};

const updatePassword = async (req, res) => {
  console.log("body", req.body);

  const user = await userServices.getUserById(req.verify._id);
  if (user.password != md5(req.body.oldPassword)) {
    res.status(401).json({ newPassword: "wrong password!" }).end();
  } else {
    const result = await userServices.updateUser(req.verify._id, {
      password: md5(req.body.newPassword),
    });

    console.log(result);
    res.status(200).end();
  }
};

const deleteUser = async (req, res) => {
  const result = await userServices.deleteUser(req.params.id);
  res.status(200).json(result).end();
};

module.exports = {
  getUser,
  addUser,
  updateUser,
  updatePassword,
  deleteUser,
  login,
};
