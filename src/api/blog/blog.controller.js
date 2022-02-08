const blogPost = (request, h) => {

  const response = {
     createdBy: request.payload.author
  }

  return response;
};
module.exports = {
  blogPost,
};
