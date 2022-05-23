const express = require("express");
const userRouter = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { getDbInstance } = require("../database");
const { verifyToken } = require("../middleware/verifyToken");
const { request } = require("express");
const ObjectId = require("mongodb").ObjectID;

userRouter.post("/login", async (req, res) => {
  console.log("login");
  const data = await (await getDbInstance())
    .collection("users")
    .findOne({ username: req.body.username });
  console.log("data: ", data, process.env.JWT_SECRET_KEY);
  if (data) {
    if (md5(req.body.password) === data.password) {
      const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: 2*60*60,
      });
      res.setHeader("Access-Control-Expose-Headers", "token")
      res.header("token", token).send("Login success");
      return;
    } else {
      res.status(400).json("wrong password").end();
      return;
    }
  }
  res.status(400).json("user not found").end();
});

userRouter.get("/", verifyToken, async (req, res) => {

  try {
    (await getDbInstance())
      .collection("users")
      .findOne({ _id: new ObjectId(req.verify._id) }, (err, result) => {
        if (result) {
          res.status(200).json(result).end();
        } else {
          res.status(400).json({ message: "user not found!" }).end();
        }
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not found!" }).end();
  }
});

userRouter.post("/", async (req, res) => {
  if (req.body.password.length < 5) {
    return res.status(400).json({ message: "password invalid" }).end();
  }
  const user = await (await getDbInstance()).collection("users").insertOne({
    username: req.body.username,
    password: md5(req.body.password),
  });
  console.log(user);
  return res.send(user.insertedId);
});

userRouter.put("/",verifyToken, async (req, res) => { 

  let newData = {$set: req.body};
  console.log("newData",newData);

  try {
    (await getDbInstance())
      .collection("users")
      .updateOne({ _id: new ObjectId(req.verify._id) }, newData, (err, result) => {
        console.log("err", err);
        console.log(result);
        if (result.modifiedCount) {
          res.status(200).json({ message: "edit success" }).end();
        } else {
          res.status(400).json({ message: "user not change!" }).end();
        }
      });
  } catch (error) {
    console.log(error);
    res.status(400).json("user not found!").end();
  }
});

userRouter.put("/password",verifyToken, async(req, res) => {
 
  console.log("body", req.body);

  const colection = await (await getDbInstance()).collection("users")
  const user = await colection.findOne({ _id: new ObjectId(req.verify._id)})
  if(user.password != md5(req.body.oldPassword)) {
    res.status(400).json("wrong password!").end();  
  }
  else {
    const newData = {$set: {password: md5(req.body.newPassword)}}
    console.log(newData)
    const result = await colection.updateOne({ _id: new ObjectId(req.verify._id) }, newData)
    console.log(result);
    res.status(200).end();
  }

})

userRouter.delete("/:id", async (req, res) => {
  try {
    (await getDbInstance())
      .collection("users")
      .deleteOne({ _id: new ObjectId(req.params.id) }, (err, result) => {
        console.log(result);
        if (result.deletedCount) {
          res.status(200).json({ message: "delete success" }).end();
        } else {
          res.status(400).json({ message: "user not found!" }).end();
        }
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not found!" }).end();
  }
});

module.exports = userRouter;
