const knex = require('../../../../database.config').knex;
const bookshelf = require('bookshelf')(knex);

const BookStore = bookshelf.Model.extend({
  tableName: "books",
});

module.exports = BookStore;
