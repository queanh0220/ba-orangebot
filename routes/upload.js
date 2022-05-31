const express = require("express");
const { getFileUpload, postFileUpload, deleteFileUpload } = require("../controller/upload");
const { upload } = require("../middleware/uploadFile");
const { wrapControler } = require("../utils/utils");
const uploadRouter = express.Router();

uploadRouter.post("/",upload.single("file"), wrapControler(postFileUpload));

uploadRouter.get("/:id", wrapControler(getFileUpload));

uploadRouter.delete('/:id', wrapControler(deleteFileUpload))

module.exports = uploadRouter;
