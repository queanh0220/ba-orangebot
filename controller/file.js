const { getFilesService, addFileService, deleteFileService } = require("../services/file");


const getFiles = async (req, res) => {
  const data = await getFilesService();
  res.status(200).json(data).end();
};

const addFile = async (req, res) => {
  const file = await addFileService(req.body);

  console.log(file);
  return res.send(file.insertedId);
};

const deleteFile = async (req, res) => {
  try {
    const result = await deleteFileService(req.params.id);
    res.status(200).json('delete success').end();
  } catch (error) {
    console.log(error);
    res.status(400).json("file not found!").end();
  }
};

module.exports = {getFiles, addFile, deleteFile}