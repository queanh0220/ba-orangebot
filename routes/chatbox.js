const express = require('express')
const chatboxRouter = express.Router()
const { verifyToken } = require('../middleware/verifyToken');
const {getChatBox, updateChatbox} = require('../controller/chatbox')

chatboxRouter.get("/",verifyToken, getChatBox); 

chatboxRouter.put("/",verifyToken, updateChatbox);


module.exports = chatboxRouter