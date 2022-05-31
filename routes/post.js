const express = require("express");
const { getPosts, addPost, updatePost, deletePost } = require("../controller/post");
const postRouter = express.Router();
const { verifyToken } = require("../middleware/verifyToken");
const { wrapControler } = require("../utils/utils");

postRouter.get("/", verifyToken, wrapControler(getPosts));

postRouter.post("/", verifyToken, wrapControler(addPost));

postRouter.put("/:id", verifyToken, wrapControler(updatePost));

postRouter.delete("/:id", verifyToken, deletePost);


module.exports = postRouter;
