const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getPostAll = async () => {
  return await (await getDbInstance()).collection("posts").find({}).toArray();
};

const addPost = async (data) => {
  return await (await getDbInstance()).collection("posts").insertOne(data);
};

const updatePost = async (id, data) => {
  const newData = { $set: data };
  return await (await getDbInstance())
    .collection("posts")
    .updateOne({ _id: new ObjectId(id) }, newData);
};

const deletePost = async (id) => {
  return (await getDbInstance())
    .collection("posts")
    .deleteOne({ _id: new ObjectId(id) });
};
module.exports = {
  getPostAll,
  addPost,
  updatePost,
  deletePost,
};
