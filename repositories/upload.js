const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const addFileUploadRepo = async (data) => {
  return (await getDbInstance()).collection("uploads").insertOne(data);
};


const getFileUploadRepo = async (id) => {
  return (await getDbInstance()).collection("uploads").findOne({_id: new ObjectId(id)});
};

module.exports = {
 addFileUploadRepo, getFileUploadRepo
};
