const knex = require('../../../../database.config').knex;
const bookshelf = require('bookshelf')(knex);

const BookStore = bookshelf.Model.extend({
  tableName: "books",
  idAttribute: 'coolId'
});

module.exports = BookStore;
