const postService = require("../services/post");

const getPosts = async (req, res) => {
  const idUser = req.verify._id;
  const result = await postService.getPostAll();
  console.log("get post", result);
  res.status(200).json(result).end();
};

const addPost = async (req, res) => {
  console.log(req.body);
  const result = await postService.addPost(req.body);
  return res.status(200).json(result).end();
};
const updatePost = async (req, res) => {
  console.log(req.body);
  const result = await postService.updatePost(req.params.id, req.body)
  return res.status(200).json(result).end();
};

const deletePost = async (req, res) => {
  const result = await postService.deletePost(req.params.id);

  res.status(200).json(result).end();
};

module.exports = { getPosts, addPost, updatePost, deletePost };
