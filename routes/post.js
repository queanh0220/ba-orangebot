const express = require("express");
const postRouter = express.Router();
const { getDbInstance } = require("../database");
const { verifyToken } = require("../middleware/verifyToken");
const ObjectId = require("mongodb").ObjectID;

postRouter.get("/", verifyToken, async (req, res) => {
  const idUser = req.verify._id;
  const result = await (await getDbInstance()).collection("posts").find({}).toArray();
    console.log("get post",result)
  res.status(200).json(result).end();
});

postRouter.post("/", verifyToken, async (req, res) => {
  console.log(req.body);
  const result = await (await getDbInstance())
    .collection("posts")
    .insertOne(req.body);
  return res.status(200).json(result).end(); 
});

postRouter.put("/:id", verifyToken, async (req, res) => {
  console.log(req.body);
  const newData = { $set: req.body };
  const result = await (await getDbInstance())
    .collection("posts")
    .updateOne({ _id: new ObjectId(req.params.id) }, newData);
  return res.status(200).json(result).end();
});

postRouter.delete("/:id", async (req, res) => {
  const result = (await getDbInstance())
    .collection("posts")
    .deleteOne({ _id: new ObjectId(req.params.id) });

    res.status(200).json(result).end()
});


module.exports = postRouter;
