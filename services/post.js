
const postRepo = require("../repositories/post");

  
  const getPostAll = () => {
    return postRepo.getPostAll();
  };
  
  const addPost = (data) => {
    return postRepo.addPost(data);
  };
  
  const updatePost = (id, data) => {
      return postRepo.updatePost(id, data)
  }
  
  const deletePost = (id) => {
    return postRepo.deletePost(id);
  };
  
  module.exports = {
    getPostAll,
    addPost,
    updatePost,
    deletePost,
  };
  