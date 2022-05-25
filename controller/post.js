const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getPosts = async (req, res) => {
  const idUser = req.verify._id;
  const result = await (await getDbInstance())
    .collection("posts")
    .find({})
    .toArray();
  console.log("get post", result);
  res.status(200).json(result).end();
};

const addPost = async (req, res) => {
  console.log(req.body);
  const result = await (await getDbInstance())
    .collection("posts")
    .insertOne(req.body);
  return res.status(200).json(result).end();
};
const updatePost = async (req, res) => {
  console.log(req.body);
  const newData = { $set: req.body };
  const result = await (await getDbInstance())
    .collection("posts")
    .updateOne({ _id: new ObjectId(req.params.id) }, newData);
  return res.status(200).json(result).end();
};

const deletePost = async (req, res) => {
  const result = (await getDbInstance())
    .collection("posts")
    .deleteOne({ _id: new ObjectId(req.params.id) });

  res.status(200).json(result).end();
};

module.exports = { getPosts, addPost, updatePost, deletePost };
