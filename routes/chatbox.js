const express = require('express')
const chatboxRouter = express.Router()
const { verifyToken } = require('../middleware/verifyToken');
const {getChatBox, updateChatbox} = require('../controller/chatbox');
const { wrapControler } = require('../utils/utils');

chatboxRouter.get("/",verifyToken, wrapControler(getChatBox)); 

chatboxRouter.put("/",verifyToken, wrapControler(updateChatbox));


module.exports = chatboxRouter