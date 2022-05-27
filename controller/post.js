const { getPostAllService, addPostService, deletePostService, updatePostService } = require("../services/post");

const getPosts = async (req, res) => {
  const idUser = req.verify._id;
  const result = await getPostAllService();
  console.log("get post", result);
  res.status(200).json(result).end();
};

const addPost = async (req, res) => {
  console.log(req.body);
  const result = await addPostService(req.body);
  return res.status(200).json(result).end();
};
const updatePost = async (req, res) => {
  console.log(req.body);
  const result = await updatePostService(req.params.id, req.body)
  return res.status(200).json(result).end();
};

const deletePost = async (req, res) => {
  const result = await deletePostService(req.params.id);

  res.status(200).json(result).end();
};

module.exports = { getPosts, addPost, updatePost, deletePost };
