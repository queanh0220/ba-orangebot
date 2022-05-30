const express = require("express");
const { getFileUpload, postFileUpload, deleteFileUpload } = require("../controller/upload");
const { upload } = require("../middleware/uploadFile");
const uploadRouter = express.Router();

uploadRouter.post("/",upload.single("file"), postFileUpload);

uploadRouter.get("/:id", getFileUpload);

uploadRouter.delete('/:id', deleteFileUpload)

module.exports = uploadRouter;
