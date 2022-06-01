const express = require("express");
const userRouter = express.Router();
const { verifyToken } = require("../middleware/verifyToken");
const userController = require("../controller/user");
const { wrapControler } = require("../utils/utils");
const { createAccountSchema, updateAccountSchema, updatePasswordSchema } = require("../middleware/validateSchema");

userRouter.post("/login",wrapControler(userController.login));

userRouter.get("/", verifyToken, wrapControler(userController.getUser));

userRouter.post("/",createAccountSchema, wrapControler(userController.addUser));

userRouter.put("/",[verifyToken, updateAccountSchema], wrapControler(userController.updateUser));

userRouter.put("/password",[verifyToken, updatePasswordSchema], wrapControler(userController.updatePassword))

userRouter.delete("/:id", wrapControler(userController.deleteUser));

module.exports = userRouter;
