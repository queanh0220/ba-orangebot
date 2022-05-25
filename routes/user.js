const express = require("express");
const userRouter = express.Router();
const { verifyToken } = require("../middleware/verifyToken");
const { login, getUser, updateUser, updatePassword, addUser, deleteUser } = require("../controller/user");

userRouter.post("/login",login);

userRouter.get("/", verifyToken, getUser);

userRouter.post("/",addUser );

userRouter.put("/",verifyToken, updateUser);

userRouter.put("/password",verifyToken, updatePassword)

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
