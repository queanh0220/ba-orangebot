const fileRepo = require("../repositories/file");

  
  const getFiles = () => {
    return fileRepo.getFileAll();
  };

  const getFileById = (id) => {
    return fileRepo.getFileById(id);
  };
  
  const addFile = (data) => {
    return fileRepo.addFile(data);
  };
  
  
  const deleteFile = (listId) => {
    return fileRepo.deleteFile(listId);
  }; 
  
  module.exports = {
    getFiles,
    addFile,
    deleteFile,
    getFileById
  };
  