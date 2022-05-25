const { getDbInstance } = require("../database");
const {
  addFileUploadService,
  getFileUploadService,
} = require("../services/upload");
const ObjectId = require("mongodb").ObjectID;

const postFileUpload = async (req, res) => {
  const file = req.file;
  if (!file) {
    res.send("Please upload a file");
    return;
  }
  const result = await addFileUploadService(file);
  const value = result.insertedId;
  res.send(`${process.env.URLSERVER}upload/${value}`);
};

const getFileUpload = async (req, res) => {
  let meta = await getFileUploadService(req.params.id);
  console.log(meta);
  const dir = `/uploads/${meta.filename}`;
  res.sendFile(process.cwd() + dir);
};

module.exports = { postFileUpload, getFileUpload };
