const { homeView } = require("./home.controller");

module.exports = {
  home: {
    method: "GET",
    path: "/",
    handler: homeView,
  },
};
