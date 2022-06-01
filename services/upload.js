const fs = require("fs");
const uploadRepo = require("../repositories/upload");

const addFileUpload = (data) => {
  return uploadRepo.addFileUpload(data);
};

const getFileUpload = (id) => {
  return uploadRepo.getFileUpload(id);
};

const deleteFileUpload = async (id) => {
  const meta = await uploadRepo.getFileUpload(id);
  console.log(meta);
  if (meta) {
    const path = `${process.cwd()}/uploads/${meta.filename}`;
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  }

  return uploadRepo.deleteFileUpload(id);
};

module.exports = {
  addFileUpload,
  getFileUpload,
  deleteFileUpload,
};
