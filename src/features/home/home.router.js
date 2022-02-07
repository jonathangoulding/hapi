const homeView = (request, h) => {
  return h.view("features/home/views/index", {
    title: "examples/nunjucks/templates | Hapi " + request.server.version,
    message: "Hello Nunjucks!",
  });
};

module.exports = {
  home: {
    method: "GET",
    path: "/home",
    handler: homeView,
  },
};
