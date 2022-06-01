const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const addFileUpload = async (data) => {
  return (await getDbInstance()).collection("uploads").insertOne(data);
};


const getFileUpload = async (id) => {
  return (await getDbInstance()).collection("uploads").findOne({_id: new ObjectId(id)});
};

const deleteFileUpload = async (id) => {
  return (await getDbInstance()).collection("uploads").deleteOne({_id: new ObjectId(id)});
};

module.exports = {
 addFileUpload, getFileUpload, deleteFileUpload
};
