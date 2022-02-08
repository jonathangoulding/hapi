"use strict";

const Hapi = require("@hapi/hapi");
const bookRoutes = require("../api/book/book.router");
const { getTime } = require("../api/time/time.router");
const { home } = require("../ui/home/home.router");
const { registerPlugin } = require("./registerPlugins");
const { registerViewEngine } = require("./regicterViewEngine");

const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const Swagger = require("../plugins/swagger");

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

server.route([...bookRoutes, getTime]);
server.route(home);

exports.init = async () => {
  await server.initialize();
  return server;
};

exports.start = async () => {
  const plugins = [Inert, Vision, Swagger];
  await server.register(plugins);

  await registerPlugin(server);
  await registerViewEngine(server);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  return server;
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
