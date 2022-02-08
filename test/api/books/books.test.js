'use strict';

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../../../src/server');

describe('/book get', () => {
    let server;

    beforeEach(async () => {
        server = await init();
    });

    afterEach(async () => {
        await server.stop();
    });

    it('responds with 200 & result is expected', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/books'
        });
        expect(res.statusCode).to.equal(200);
        expect(res.result).to.equal([ { title: "fella"}])
    });
});