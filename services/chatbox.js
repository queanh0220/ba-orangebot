const { getChatboxByIdUser, addChatboxRepo, updateChatboxByIdUser } = require("../repositories/chatbox");

  
  const getChatboxService = (idUser) => {
    return getChatboxByIdUser(idUser);
  };
  
  const addChatboxService = (data) => {
    return addChatboxRepo(data);
  };
  
  
  const updateChatboxService = (idUser, data) => {
    return updateChatboxByIdUser(idUser, data);
  };
  
  module.exports = {
    getChatboxService,
    addChatboxService,
    updateChatboxService
  };
  