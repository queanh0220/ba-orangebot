const { getDbInstance } = require('../database');

const getChatBox = async (req, res) => {
    const idUser = req.verify._id;
    const colection = await (await getDbInstance()).collection("chatboxs");
    let data = await colection.findOne({idUser});
    console.log("checkbox get data",data);
    if(!data) {
      data = await colection.insertOne({idUser});
    }
    res.status(200).json(data).end()
  }

const updateChatbox = async (req, res) => {
    console.log(req.body);
    const newData = {$set: req.body}
    const result = await (await getDbInstance()).collection('chatboxs').updateOne({ idUser: req.verify._id }, newData);
    return res.status(200).json(result).end()
  }

  module.exports = {getChatBox, updateChatbox}