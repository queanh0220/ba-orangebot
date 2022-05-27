const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getPostAllRepo = async () => {
  return await (await getDbInstance()).collection("posts").find({}).toArray();
};

const addPostRepo = async (data) => {
  return await (await getDbInstance()).collection("posts").insertOne(data);
};

const updatePostRepo = async (id, data) => {
  const newData = { $set: data };
  return await (await getDbInstance())
    .collection("posts")
    .updateOne({ _id: new ObjectId(id) }, newData);
};

const deletePostRepo = async (id) => {
  return (await getDbInstance())
    .collection("posts")
    .deleteOne({ _id: new ObjectId(id) });
};
module.exports = {
  getPostAllRepo,
  addPostRepo,
  updatePostRepo,
  deletePostRepo,
};
