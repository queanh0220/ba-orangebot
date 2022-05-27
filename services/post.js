
const { updatePostRepo, getPostAllRepo, addPostRepo, deletePostRepo } = require("../repositories/post");

  
  const getPostAllService = () => {
    return getPostAllRepo();
  };
  
  const addPostService = (data) => {
    return addPostRepo(data);
  };
  
  const updatePostService = (id, data) => {
      return updatePostRepo(id, data)
  }
  
  const deletePostService = (id) => {
    return deletePostRepo(id);
  };
  
  module.exports = {
    getPostAllService,
    addPostService,
    updatePostService,
    deletePostService,
  };
  