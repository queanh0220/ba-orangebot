const { getFileAllRepo, addFileRepo, deleteFileRepo } = require("../repositories/file");

  
  const getFilesService = () => {
    return getFileAllRepo();
  };
  
  const addFileService = (data) => {
    return addFileRepo(data);
  };
  
  
  const deleteFileService = (id) => {
    return deleteFileRepo(id);
  };
  
  module.exports = {
    getFilesService,
    addFileService,
    deleteFileService,
  };
  