
const uploadService = require("../services/upload");

const postFileUpload = async (req, res) => {
  const file = req.file;
  if (!file) {
    res.send("Please upload a file");
    return;
  }
  const result = await uploadService.addFileUpload(file);
  const value = result.insertedId;
  res.send(`${process.env.URLSERVER}upload/${value}`);
};

const getFileUpload = async (req, res) => {
  let meta = await uploadService.getFileUpload(req.params.id);
  console.log(meta);
  const dir = `/uploads/${meta.filename}`;
  console.log("get file",process.cwd() + dir);
  res.sendFile(process.cwd() + dir);
};

const deleteFileUpload = async (req, res) => {
  console.log("paam", req.params.id)
  let meta = await uploadService.deleteFileUpload(req.params.id);
  console.log(meta);
  res.send(meta);
};

module.exports = { postFileUpload, getFileUpload, deleteFileUpload };
