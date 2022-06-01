const express = require("express");
const scenarioController = require("../controller/scenario");
const scenarioRouter = express.Router();
const { getDbInstance } = require("../database");
const { verifyToken } = require("../middleware/verifyToken");
const { wrapControler } = require("../utils/utils");
const ObjectId = require("mongodb").ObjectID;

scenarioRouter.get("/", verifyToken, wrapControler(scenarioController.getScenarios));

scenarioRouter.post("/", verifyToken, wrapControler(scenarioController.addScenario));

scenarioRouter.put("/:id", verifyToken, wrapControler(scenarioController.updateScenario));

scenarioRouter.delete("/", verifyToken, wrapControler(scenarioController.deleteScenarios));


module.exports = scenarioRouter;