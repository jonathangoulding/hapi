const homeView = (request, h) => {
    return h.view("ui/home/views/index", {
      title: "examples/nunjucks/templates | Hapi " + request.server.version,
      message: "Hello Nunjucks!",
    });
  };

  module.exports = {
      homeView
  }