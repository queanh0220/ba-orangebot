const express = require("express");
const userRouter = express.Router();
const { verifyToken } = require("../middleware/verifyToken");
const { login, getUser, updateUser, updatePassword, addUser, deleteUser } = require("../controller/user");
const { wrapControler } = require("../utils/utils");
const { createAccountSchema, updateAccountSchema, updatePasswordSchema } = require("../middleware/validateSchema");

userRouter.post("/login",wrapControler(login));

userRouter.get("/", verifyToken, wrapControler(getUser));

userRouter.post("/",createAccountSchema, wrapControler(addUser));

userRouter.put("/",[verifyToken, updateAccountSchema], wrapControler(updateUser));

userRouter.put("/password",[verifyToken, updatePasswordSchema], wrapControler(updatePassword))

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
