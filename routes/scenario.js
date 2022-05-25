const express = require("express");
const scenarioRouter = express.Router();
const { getDbInstance } = require("../database");
const { verifyToken } = require("../middleware/verifyToken");
const ObjectId = require("mongodb").ObjectID;

scenarioRouter.get("/", verifyToken, async (req, res) => {
  const idUser = req.verify._id;
  const result = await (await getDbInstance()).collection("scenarios").find({}).toArray();
    console.log("get scen",result)
  res.status(200).json(result).end();
});

scenarioRouter.post("/", verifyToken, async (req, res) => {
  console.log(req.body);
  const result = await (await getDbInstance())
    .collection("scenarios")
    .insertOne(req.body);
  return res.status(200).json(result).end(); 
});

scenarioRouter.put("/:id", verifyToken, async (req, res) => {
  console.log(req.body);
  const newData = { $set: req.body };
  const result = await (await getDbInstance())
    .collection("scenarios")
    .updateOne({ _id: new ObjectId(req.params.id) }, newData);
  return res.status(200).json(result).end();
});

scenarioRouter.delete("/:id", async (req, res) => {
  const result = (await getDbInstance())
    .collection("scenarios")
    .deleteOne({ _id: new ObjectId(req.params.id) });

    res.status(200).json(result).end()
});


module.exports = scenarioRouter;
