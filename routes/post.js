const express = require("express");
const { getPosts, addPost, updatePost, deletePost } = require("../controller/post");
const postRouter = express.Router();
const { verifyToken } = require("../middleware/verifyToken");

postRouter.get("/", verifyToken, getPosts);

postRouter.post("/", verifyToken, addPost);

postRouter.put("/:id", verifyToken, updatePost);

postRouter.delete("/:id", deletePost);


module.exports = postRouter;
