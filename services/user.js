const {
  getUserByUserName,
  getUserById,
  addUserRepo,
  updateUserRepo,
  deleteUserRepo,
} = require("../repositories/user");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

const getUserByUsernameService = (data) => {
  return getUserByUserName(data.username);

};

const getUserByIdService = (id) => {
  return getUserById(id);
};

const addUserService = (data) => {
  return addUserRepo({username: data.username, password: md5(data.password)});
};

const updateUserService = (id, data) => {
  return updateUserRepo(id, data);
};

const deleteUserService = (id) => {
  return deleteUserRepo(id);
};

module.exports = {
  getUserByUsernameService,
  getUserByIdService,
  addUserService,
  updateUserService,
  deleteUserService,
};
