
const scenarioRepo = require("../repositories/scenarios");

  
const getScenarioAll = () => {
  return scenarioRepo.getScenarioAll();
};

const addScenario = (data) => {
  return scenarioRepo.addScenario(data);
};

const updateScenario = (id, data) => {
    return scenarioRepo.updateScenario(id, data)
}

const deleteScenario = (listId) => {
  console.log("scen service", listId)
  return scenarioRepo.deleteScenario(listId);
};

module.exports = {
  getScenarioAll,
  addScenario,
  updateScenario,
  deleteScenario,
};
