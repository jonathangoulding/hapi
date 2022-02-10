const Boom = require("@hapi/boom");
const { findBookById, findBooks, saveBook } = require("./model/handler");

const getBooks = async (request, h) => {
  const books = await findBooks();

  if (!books || books.length === 0) {
    throw Boom.badRequest(`No books in the Database`);
  }

  return books;
};

const getBookById = async (request, h) => {
  const bookId = request.params.id;
  const foundBook = findBookById(bookId);

  if (foundBook === undefined) {
    throw Boom.badRequest(`Book id: ${bookId} not found`);
  }
  return foundBook;
};

const createBook = async (request, h) => {
  const newBook = await saveBook(request.payload);

  const response = {
    createdBy: newBook,
  };
  return response;
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
};
