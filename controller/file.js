
const { getFilesService, addFileService, deleteFileService, getFileByIdService } = require("../services/file");
const { deleteFileUploadService } = require("../services/upload");


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
    
    await Promise.all(req.body.map(async (id) => {
      const file = await getFileByIdService(id);
     await deleteFileUploadService(file.link.split('/').pop());
    }));
     
    const result = await deleteFileService(req.body);
    res.status(200).json(result).end();
  } catch (error) {
    console.log(error);
    res.status(400).json("file not found!").end();
  }
};

module.exports = {getFiles, addFile, deleteFile}