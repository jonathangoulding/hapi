const books = require("./books.json");

const findBooks = () => books;

const findBookById = (bookId) =>
  books.find((book) => book.id.toString() === bookId);

module.exports = {
  findBookById,
  findBooks,
};
