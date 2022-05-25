
const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getUserById = async (id) => {
  return (await getDbInstance()).collection("users").findOne({_id: new ObjectId(id)});
};

const getUserByUserName = async (username) => {
    return (await getDbInstance()).collection("users").findOne({username});
}

const addUserRepo = async (data) => {
  return (await getDbInstance()).collection("users").insertOne(data);
};

const updateUserRepo = async (id, data) => {
  const newData = { $set: data };
  return (await getDbInstance()).collection("users").updateOne({_id: new ObjectId(id)}, newData);
};

const deleteUserRepo = async (id) => {
  return (await getDbInstance()).collection("users").deleteOne({_id: new ObjectId(id)});
};
module.exports = { getUserById, getUserByUserName, addUserRepo, updateUserRepo, deleteUserRepo };
