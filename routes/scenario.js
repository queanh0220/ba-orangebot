const express = require("express");
const { getScenarios, addScenario, updateScenario, deleteScenarios } = require("../controller/scenario");
const scenarioRouter = express.Router();
const { getDbInstance } = require("../database");
const { verifyToken } = require("../middleware/verifyToken");
const { wrapControler } = require("../utils/utils");
const ObjectId = require("mongodb").ObjectID;

scenarioRouter.get("/", verifyToken, wrapControler(getScenarios));

scenarioRouter.post("/", verifyToken, wrapControler(addScenario));

scenarioRouter.put("/:id", verifyToken, wrapControler(updateScenario));

scenarioRouter.delete("/", verifyToken, wrapControler(deleteScenarios));


module.exports = scenarioRouter;