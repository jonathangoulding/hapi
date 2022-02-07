'use strict';

const Hapi = require('@hapi/hapi');
const { blogPost } = require('./features/blog/blog.router');
const { getBooks } = require('./features/books/book.router');
const { homepage } = require('./features/homepage/homepage.router');
const { getDate } = require('./plugins/datePlugin');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register({
        plugin: getDate,
        options: {
            name: 'Tom'
        }
    });

    server.route(blogPost)
    server.route(homepage)
    server.route(getBooks)

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();