const express = require('express');
const { getFiles, addFile, deleteFile } = require('../controller/file');
const { verifyToken } = require('../middleware/verifyToken');
const { wrapControler } = require('../utils/utils');
const fileRouter = express.Router()

fileRouter.get("/",verifyToken, wrapControler(getFiles)); 

fileRouter.post("/",verifyToken, wrapControler(addFile));

fileRouter.delete("/",verifyToken, wrapControler(deleteFile));

module.exports = fileRouter