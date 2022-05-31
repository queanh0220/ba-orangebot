const fs = require("fs");
const {
  addFileUploadRepo,
  getFileUploadRepo,
  deleteFileUploadRepo,
} = require("../repositories/upload");

const addFileUploadService = (data) => {
  return addFileUploadRepo(data);
};

const getFileUploadService = (id) => {
  return getFileUploadRepo(id);
};

const deleteFileUploadService = async (id) => {
  const meta = await getFileUploadRepo(id);
  console.log(meta);
  if (meta) {
    const path = `${process.cwd()}/uploads/${meta.filename}`;
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  }

  return deleteFileUploadRepo(id);
};

module.exports = {
  addFileUploadService,
  getFileUploadService,
  deleteFileUploadService,
};
