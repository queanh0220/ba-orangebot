const scenarioService = require("../services/scenario");
const userService = require("../services/user");

const getScenarios = async (req, res) => {
    const result = await scenarioService.getScenarioAll();
      console.log("get scen",result)
    res.status(200).json(result).end();
  }

  const addScenario = async (req, res) => {
    try {
      const user = await userService.getUserById(req.verify._id);
      console.log("user", user);
      const result = await scenarioService.addScenario({...req.body, author: user.username});
    res.status(200).json(result).end(); 
    } catch (error) {
      res.status(400).json(error.message).end();
    }
  }

  const updateScenario =  async (req, res) => {
    console.log(req.body);
    const result = await scenarioService.updateScenario(req.params.id, req.body)
    return res.status(200).json(result).end();

  }

  const deleteScenarios =  async (req, res) => {
    console.log("scen controler", req)
    const result = await scenarioService.deleteScenario(req.body);
      res.status(200).json(result).end()
  }


  module.exports = {getScenarios, addScenario, updateScenario, deleteScenarios}