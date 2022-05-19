const express = require("express");
const downloadRouter = express.Router();
const { getDbInstance } = require("../database");
const ObjectId = require('mongodb').ObjectID;
downloadRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  let meta = await (await getDbInstance())
    .collection("uploads")
    .findOne({ _id: new ObjectId(id) });
  console.log(meta);
  const dir = `/uploads/${meta.filename}`;
  console.log(dir);
  res.sendFile(process.cwd()+dir);
});

module.exports = downloadRouter;
