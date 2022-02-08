"use strict";

const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { afterEach, beforeEach, describe, it } = (exports.lab = Lab.script());
const { init } = require("../../../src/server");
const books = require("../../../src/api/book/model/books.json");

describe("books", () => {
  describe("/book get", () => {
    let server;

    beforeEach(async () => {
      server = await init();
    });

    afterEach(async () => {
      await server.stop();
    });

    it("responds with 200 & result is expected", async () => {
      const res = await server.inject({
        method: "get",
        url: "/api/book",
      });
      expect(res.statusCode).to.equal(200);
      expect(res.result).to.equal(books);
    });
  });
  describe("/book/{id}", () => {
    describe("/book/{id} get book by id successful", () => {
      let server;

      beforeEach(async () => {
        server = await init();
      });

      afterEach(async () => {
        await server.stop();
      });

      it("responds with 200 & result is expected", async () => {
        const res = await server.inject({
          method: "get",
          url: "/api/book/1",
        });
        expect(res.statusCode).to.equal(200);
        expect(res.result).to.equal(books[0]);
      });
    });
    describe("/book/{id} get book by id failed", () => {
      let server;

      beforeEach(async () => {
        server = await init();
      });

      afterEach(async () => {
        await server.stop();
      });

      it("responds with 400 & result is an error", async () => {
        const res = await server.inject({
          method: "get",
          url: "/api/book/4",
        });
        expect(res.statusCode).to.equal(400);
        expect(res.result).to.equal({
          statusCode: 400,
          error: "Bad Request",
          message: "Book id: 4 not found",
        });
      });
    });
  });
  describe("/book post", () => {
    let server;

    beforeEach(async () => {
      server = await init();
    });

    afterEach(async () => {
      await server.stop();
    });

    it("responds with 200 & result is expected", async () => {
      const payload = {
        author: "Marcus",
        post: "mock psot",
      };

      const res = await server.inject({
        method: "post",
        url: "/api/book",
        payload,
      });
      expect(res.statusCode).to.equal(200);
      expect(res.payload).to.equal('{"createdBy":"Marcus"}');
    });
  });
});
