const chatboxService = require('../services/chatbox');

const getChatBox = async (req, res) => {
    const idUser = req.verify._id;
    let data = await chatboxService.getChatbox(idUser);
    console.log("checkbox get data",data);
    if(!data) {
      data = await chatboxService.addChatbox({idUser});
    }
    res.status(200).json(data).end()
  }

const updateChatbox = async (req, res) => {
    console.log("update chatbox",req.body);
    const result = await chatboxService.updateChatbox( req.verify._id, req.body)
    return res.status(200).json(result).end()
  }

  module.exports = {getChatBox, updateChatbox}