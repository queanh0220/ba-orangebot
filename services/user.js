const {
  getUserByUserName,
  getUserById,
  addUserRepo,
  updateUserRepo,
  deleteUserRepo,
} = require("../repositories/user");
const md5 = require("md5");
const jwt = require("jsonwebtoken");

const loginService = async (data) => {
  const user = await getUserByUserName(data.username);
  if (user) {
    if (md5(data.password) === user.password) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: 2 * 60 * 60,
      });
      return token;
    } else {
      throw Error("wrong password");
    }
  }
  throw Error("user not found");
};

const getUserService = (id) => {
  return getUserById(id);
};

const addUserService = (data) => {
  if (data.password.length < 5) {
    throw Error("password invalid");
  }
  return addUserRepo({username: data.username, password: md5(data.password)});
};

const updateUserService = (id, data) => {
  return updateUserRepo(id, data);
};

const deleteUserService = (id) => {
  return deleteUserRepo(id);
};

module.exports = {
  loginService,
  getUserService,
  addUserService,
  updateUserService,
  deleteUserService,
};
