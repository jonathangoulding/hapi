"use strict";

const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { afterEach, beforeEach, describe, it } = (exports.lab = Lab.script());
const { init } = require("../../../src/server");

describe("/blog post", () => {
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
      url: "/api/blog",
      payload,
    });
    expect(res.statusCode).to.equal(200);
    expect(res.payload).to.equal("{\"createdBy\":\"Marcus\"}");
  });
});
