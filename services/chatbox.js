const chatboxRepo = require("../repositories/chatbox");

  
  const getChatbox = (idUser) => {
    return chatboxRepo.getChatboxByIdUser(idUser);
  };
  
  const addChatbox = (data) => {
    return chatboxRepo.addChatbox(data);
  };
  
  
  const updateChatbox = (idUser, data) => {
    return chatboxRepo.updateChatboxByIdUser(idUser, data);
  };
  
  module.exports = {
    getChatbox,
    addChatbox,
    updateChatbox
  };
  