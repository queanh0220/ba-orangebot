const express = require("express");
const uploadRouter = express.Router();
const multer = require("multer");
const { getDbInstance } = require("../database");
const path = require("path");
const ObjectId = require('mongodb').ObjectID;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("destination");
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log("filename", file);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

uploadRouter.post("/",upload.single("file"), async (req, res) => {
    const file = req.file;
    if (!file) {
        res.send("Please upload a file");
        return;
      }
      const result = await (await getDbInstance())
        .collection("uploads")
        .insertOne(file);
      const value = result.insertedId;
      res.send(`http://localhost:4000/upload/${value}`);
});

uploadRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    let meta = await (await getDbInstance())
      .collection("uploads")
      .findOne({ _id: new ObjectId(id) });
    console.log(meta);
    const dir = `/uploads/${meta.filename}`;
    console.log(dir);
    res.sendFile(process.cwd()+dir);
  
  });


module.exports = uploadRouter;
