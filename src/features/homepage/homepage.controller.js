const homepage = (request, h) => {
    const response = {
      message: "Hello World",
      time: h.getDate()
    }
    return response;
}
  module.exports = {
    homepage,
  };
  