const express = require('express');
const { getFiles, addFile, deleteFile } = require('../controller/file');
const fileRouter = express.Router()

fileRouter.get("/", getFiles); 
 

fileRouter.post("/", addFile);

fileRouter.delete("/", deleteFile);

module.exports = fileRouter