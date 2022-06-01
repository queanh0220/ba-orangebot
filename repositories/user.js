
const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getUserById = async (id) => {
  return (await getDbInstance()).collection("users").findOne({_id: new ObjectId(id)});
};

const getUserByUserName = async (username) => {
    return (await getDbInstance()).collection("users").findOne({username});
}

const addUser = async (data) => {
  return (await getDbInstance()).collection("users").insertOne(data);
};

const updateUser = async (id, data) => {
  const newData = { $set: data };
  return (await getDbInstance()).collection("users").updateOne({_id: new ObjectId(id)}, newData);
};

const deleteUser = async (id) => {
  return (await getDbInstance()).collection("users").deleteOne({_id: new ObjectId(id)});
};
module.exports = { getUserById, getUserByUserName, addUser, updateUser, deleteUser };
