
const fileService = require("../services/file");
const uploadService = require("../services/upload");


const getFiles = async (req, res) => {
  const data = await fileService.getFiles();
  res.status(200).json(data).end();
};

const addFile = async (req, res) => {
  const file = await fileService.addFile(req.body);

  console.log(file);
  return res.send(file.insertedId);
};

const deleteFile = async (req, res) => {
    await Promise.all(req.body.map(async (id) => {
      const file = await fileService.getFileById(id);
     await uploadService.deleteFileUpload(file.link.split('/').pop());
    }));
     
    const result = await fileService.deleteFile(req.body);
    res.status(200).json(result).end();

};

module.exports = {getFiles, addFile, deleteFile}