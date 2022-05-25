const { addFileUploadRepo, getFileUploadRepo } = require("../repositories/upload")

const addFileUploadService = (data) => {
    return addFileUploadRepo(data)
}

const getFileUploadService = (id) => {
    return getFileUploadRepo(id);
}

module.exports = {
    addFileUploadService, getFileUploadService
}