const { getTime } = require("./time.controller");


module.exports = {
  getTime: {
    method: "GET",
    path: "/api/time",
    handler: getTime,
  },
};
