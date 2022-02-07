"use strict";

const Hapi = require("@hapi/hapi");
const { blogPost } = require("../features/blog/blog.router");
const { getBooks } = require("../features/books/book.router");
const { home } = require("../features/home/home.router");
const { homepage } = require("../features/homepage/homepage.router");
const { registerPlugin } = require("./registerPlugins");
const { registerViewEngine } = require("./regicterViewEngine");

const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

server.route(blogPost);
server.route(homepage);
server.route(getBooks);
server.route(home);

(async () => {
  await registerPlugin(server);
  await registerViewEngine(server);
})();

exports.init = async () => {
  await server.initialize();
  return server;
};

exports.start = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  return server;
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
