const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getFileAllRepo = async () => {
  return (await getDbInstance()).collection("files").find({}).toArray();
};

const getFileByIdRepo = async (id) => {
  return (await getDbInstance()).collection("files").findOne({ _id: new ObjectId(id) });
};

const addFileRepo = async (data) => {
  return (await getDbInstance()).collection("files").insertOne(data);
};

const deleteFileRepo = async (listId) => {
  const query = { _id: { $in: listId.map(id => new ObjectId(id)) } };
  return (await getDbInstance())
    .collection("files")
    .deleteMany(query);
};
module.exports = {
  getFileAllRepo,
  addFileRepo,
  deleteFileRepo,
  getFileByIdRepo
};
