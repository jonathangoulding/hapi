"use strict";

const Hapi = require("@hapi/hapi");
const { blogPost } = require("../api/blog/blog.router");
const { getBooks } = require("../api/books/book.router");
const { homepage } = require("../api/homepage/homepage.router");
const { home } = require("../ui/home/home.router");
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



exports.init = async () => {
  await server.initialize();
  return server;
};

exports.start = async () => {
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
