const express = require("express");
const { getScenarios, addScenario, updateScenario, deleteScenario } = require("../controller/scenario");
const scenarioRouter = express.Router();
const { getDbInstance } = require("../database");
const { verifyToken } = require("../middleware/verifyToken");
const ObjectId = require("mongodb").ObjectID;

scenarioRouter.get("/", verifyToken, getScenarios);

scenarioRouter.post("/", verifyToken, addScenario);

scenarioRouter.put("/:id", verifyToken, updateScenario);

scenarioRouter.delete("/:id", deleteScenario);


module.exports = scenarioRouter;
