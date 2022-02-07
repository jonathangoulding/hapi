const { getDate } = require("../plugins/datePlugin");

const registerPlugin = async (server) => {
    await server.register({
      plugin: getDate,
      options: {
        name: "Tom",
      },
    });
  };

  module.exports = {
      registerPlugin
  }