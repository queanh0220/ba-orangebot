const express = require("express");
const uploadController = require("../controller/upload");
const { upload } = require("../middleware/uploadFile");
const { wrapControler } = require("../utils/utils");
const uploadRouter = express.Router();

uploadRouter.post("/",upload.single("file"), wrapControler(uploadController.postFileUpload));

uploadRouter.get("/:id", wrapControler(uploadController.getFileUpload));

uploadRouter.delete('/:id', wrapControler(uploadController.deleteFileUpload))

module.exports = uploadRouter;
