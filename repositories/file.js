const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getFileAllRepo = async () => {
  return (await getDbInstance()).collection("files").find({}).toArray();
};


const addFileRepo = async (data) => {
  return (await getDbInstance()).collection("files").insertOne(data);
};


const deleteFileRepo = async (id) => {
  return (await getDbInstance())
    .collection("files")
    .deleteOne({ _id: new ObjectId(id) });
};
module.exports = {
  getFileAllRepo,
  addFileRepo,
  deleteFileRepo,
};
