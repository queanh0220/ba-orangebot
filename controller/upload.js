const fs = require("fs");
const uploadService = require("../services/upload");

const postFileUpload = async (req, res) => {
  const file = req.file;
  if (!file) {
    res.send("Please upload a file");
    return;
  }
  const img = fs.readFileSync(file.path);
  const encode = img.toString('base64');
  file.imgBuffer = new Buffer(encode, 'base64');

  const result = await uploadService.addFileUpload(file);
  const value = result.insertedId;
  res.send(`${process.env.URLSERVER}upload/${value}`);
};

const getFileUpload = async (req, res) => {
  let meta = await uploadService.getFileUpload(req.params.id);
 
  res.contentType(meta.mimetype);
  res.send(meta.imgBuffer.buffer);
};

const deleteFileUpload = async (req, res) => {
  console.log("paam", req.params.id)
  let meta = await uploadService.deleteFileUpload(req.params.id);
  console.log(meta);
  res.send(meta);
};

module.exports = { postFileUpload, getFileUpload, deleteFileUpload };
