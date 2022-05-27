
const { updateScenarioRepo, getScenarioAllRepo, addScenarioRepo, deleteScenarioRepo } = require("../repositories/scenarios");

  
const getScenarioAllService = () => {
  return getScenarioAllRepo();
};

const addScenarioService = (data) => {
  return addScenarioRepo(data);
};

const updateScenarioService = (id, data) => {
    return updateScenarioRepo(id, data)
}

const deleteScenarioService = (listId) => {
  console.log("scen service", listId)
  return deleteScenarioRepo(listId);
};

module.exports = {
  getScenarioAllService,
  addScenarioService,
  updateScenarioService,
  deleteScenarioService,
};
