const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getScenarioAllRepo = async () => {
  return await (await getDbInstance()).collection("scenarios").find({}).toArray();
};

const addScenarioRepo = async (data) => {
  return await (await getDbInstance()).collection("scenarios").insertOne(data);
};

const updateScenarioRepo = async (id, data) => {
  const newData = { $set: data };
  return await (await getDbInstance())
    .collection("scenarios")
    .updateOne({ _id: new ObjectId(id) }, newData);
};

const deleteScenarioRepo = async (listId) => {
  console.log("scen repo",listId);
  const query = { _id: { $in: listId.map(id => new ObjectId(id)) } };
  return (await getDbInstance())
    .collection("scenarios")
    .deleteMany(query);
};
module.exports = {
  getScenarioAllRepo,
  addScenarioRepo,
  updateScenarioRepo,
  deleteScenarioRepo,
};
