const express = require("express");
const postController = require("../controller/post");
const postRouter = express.Router();
const { verifyToken } = require("../middleware/verifyToken");
const { wrapControler } = require("../utils/utils");

postRouter.get("/", verifyToken, wrapControler(postController.getPosts));

postRouter.post("/", verifyToken, wrapControler(postController.addPost));

postRouter.put("/:id", verifyToken, wrapControler(postController.updatePost));

postRouter.delete("/:id", verifyToken, wrapControler(postController.deletePost));


module.exports = postRouter;
