const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getFileAll = async () => {
  return (await getDbInstance()).collection("files").find({}).toArray();
};

const getFileById = async (id) => {
  return (await getDbInstance()).collection("files").findOne({ _id: new ObjectId(id) });
};

const addFile = async (data) => {
  return (await getDbInstance()).collection("files").insertOne(data);
};

const deleteFile = async (listId) => {
  const query = { _id: { $in: listId.map(id => new ObjectId(id)) } };
  return (await getDbInstance())
    .collection("files")
    .deleteMany(query);
};
module.exports = {
  getFileAll,
  addFile,
  deleteFile,
  getFileById
};
