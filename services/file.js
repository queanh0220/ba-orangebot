const { getFileAllRepo, addFileRepo, deleteFileRepo, getFileByIdRepo } = require("../repositories/file");

  
  const getFilesService = () => {
    return getFileAllRepo();
  };

  const getFileByIdService = (id) => {
    return getFileByIdRepo(id);
  };
  
  const addFileService = (data) => {
    return addFileRepo(data);
  };
  
  
  const deleteFileService = (listId) => {
    return deleteFileRepo(listId);
  };
  
  module.exports = {
    getFilesService,
    addFileService,
    deleteFileService,
    getFileByIdService
  };
  