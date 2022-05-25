const md5 = require("md5");
const jwt = require("jsonwebtoken");
const {
  getUserService,
  addUserService,
  updateUserService,
  deleteUserService,
  loginService,
} = require("../services/user");

const login = async (req, res) => {
  console.log("login");
  try {
    const token = await loginService(req.body);
    res.setHeader("Access-Control-Expose-Headers", "token");
    res.header("token", token).send("Login success");
  } catch (error) {
    res.status(400).json(error.message).end();
  }
};

const getUser = async (req, res) => {
  console.log("get user");
  try {
    const result = await getUserService(req.verify._id);
    res.status(200).json(result).end();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not found!" }).end();
  }
};

const addUser = async (req, res) => {
  try {
    const user = await addUserService(req.body);
    res.status(200).json(user.insertedId).end();
  } catch (error) {
    res.status(400).json({ message: "password invalid" }).end();
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await updateUserService(req.verify._id, req.body);
    res.status(200).json(result).end();
  } catch (error) {
    console.log("update user", error);
    res.status(400).json("user not found!").end();
  }
};

const updatePassword = async (req, res) => {
  console.log("body", req.body);

  const user = await getUserService(req.verify._id);
  if (user.password != md5(req.body.oldPassword)) {
    res.status(400).json("wrong password!").end();
  } else {
    const result = await updateUserService(req.verify._id, {
      password: md5(req.body.newPassword),
    });

    console.log(result);
    res.status(200).end();
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = deleteUserService(req.params.id);
    res.status(200).json(result).end();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not found!" }).end();
  }
};

module.exports = {
  getUser,
  addUser,
  updateUser,
  updatePassword,
  deleteUser,
  login,
};
