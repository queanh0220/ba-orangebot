const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getScenarios = async (req, res) => {
    const idUser = req.verify._id;
    const result = await (await getDbInstance()).collection("scenarios").find({}).toArray();
      console.log("get scen",result)
    res.status(200).json(result).end();
  }

  const addScenario = async (req, res) => {
    console.log(req.body);
    const result = await (await getDbInstance())
      .collection("scenarios")
      .insertOne(req.body);
    return res.status(200).json(result).end(); 
  }

  const updateScenario =  async (req, res) => {
    console.log(req.body);
    const newData = { $set: req.body };
    const result = await (await getDbInstance())
      .collection("scenarios")
      .updateOne({ _id: new ObjectId(req.params.id) }, newData);
    return res.status(200).json(result).end();
  }

  const deleteScenario =  async (req, res) => {
    const result = (await getDbInstance())
      .collection("scenarios")
      .deleteOne({ _id: new ObjectId(req.params.id) });
  
      res.status(200).json(result).end()
  }

  module.exports = {getScenarios, addScenario, updateScenario, deleteScenario}