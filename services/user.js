const userRepo = require("../repositories/user");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

const getUserByUsername = (data) => {
  return userRepo.getUserByUserName(data.username);

};

const getUserById = (id) => {
  return userRepo.getUserById(id);
};

const addUser = (data) => {
  return userRepo.addUser({username: data.username, password: md5(data.password)});
};

const updateUser = (id, data) => {
  return userRepo.updateUser(id, data);
};

const deleteUser = (id) => {
  return userRepo.deleteUser(id);
};

module.exports = {
  getUserByUsername,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
