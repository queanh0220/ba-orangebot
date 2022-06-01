const express = require('express')
const chatboxRouter = express.Router()
const { verifyToken } = require('../middleware/verifyToken');
const chatboxController = require('../controller/chatbox');
const { wrapControler } = require('../utils/utils');

chatboxRouter.get("/",verifyToken, wrapControler(chatboxController.getChatBox)); 

chatboxRouter.put("/",verifyToken, wrapControler(chatboxController.updateChatbox));


module.exports = chatboxRouter