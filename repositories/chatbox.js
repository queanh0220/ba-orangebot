const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getChatboxByIdUser = async (idUser) => {
  return await (await getDbInstance()).collection("chatboxs").findOne({idUser});
};


const addChatbox = async (data) => {
  return (await getDbInstance()).collection("chatboxs").insertOne(data);
};


const updateChatboxByIdUser = async (idUser, data) => {
    const newData = {$set: data}
  return await (await getDbInstance()).collection('chatboxs').updateMany({ idUser }, newData);
};
module.exports = {
  getChatboxByIdUser,addChatbox, updateChatboxByIdUser
};
