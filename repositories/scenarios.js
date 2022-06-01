const { getDbInstance } = require("../database");
const ObjectId = require("mongodb").ObjectID;

const getScenarioAll = async () => {
  return await (await getDbInstance()).collection("scenarios").find({}).toArray();
};

const addScenario = async (data) => {
  return await (await getDbInstance()).collection("scenarios").insertOne(data);
};

const updateScenario = async (id, data) => {
  const newData = { $set: data };
  return await (await getDbInstance())
    .collection("scenarios")
    .updateOne({ _id: new ObjectId(id) }, newData);
};

const deleteScenario = async (listId) => {
  console.log("scen repo",listId);
  const query = { _id: { $in: listId.map(id => new ObjectId(id)) } };
  return (await getDbInstance())
    .collection("scenarios")
    .deleteMany(query);
};
module.exports = {
  getScenarioAll,
  addScenario,
  updateScenario,
  deleteScenario,
};
