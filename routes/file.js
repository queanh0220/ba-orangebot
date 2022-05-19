const express = require('express')
const fileRouter = express.Router()
const { getDbInstance } = require('../database');
const ObjectId = require('mongodb').ObjectID;

fileRouter.get("/", async (req, res) => {
  const data = await (await getDbInstance()).collection("files").find({}).toArray();
  res.status(200).json(data).end()
}); 
 

fileRouter.post("/", async (req, res) => {

  const file = await (await getDbInstance()).collection('files').insertOne(req.body);
  console.log(file)
  return res.send(file.insertedId)
});

fileRouter.delete("/:id", async (req, res) => {
  try {
    (await getDbInstance()).collection("files").deleteOne({"_id": new ObjectId(req.params.id)}, (err, result) => {
      console.log(result)
      if(result.deletedCount) {
        res.status(200).json({ message: "delete success" }).end();
      }
      else {
        res.status(400).json({ message: "file not found!" }).end();
      }
      
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: "file not found!" }).end();
  }
 
});

module.exports = fileRouter