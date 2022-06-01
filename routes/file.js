const express = require('express');
const fileController = require('../controller/file');
const { verifyToken } = require('../middleware/verifyToken');
const { wrapControler } = require('../utils/utils');
const fileRouter = express.Router()

fileRouter.get("/",verifyToken, wrapControler(fileController.getFiles)); 

fileRouter.post("/",verifyToken, wrapControler(fileController.addFile));

fileRouter.delete("/",verifyToken, wrapControler(fileController.deleteFile));

module.exports = fileRouter