const Boom = require("@hapi/boom");
const { findBookById, findBooks } = require("./model/handler");

const getBooks = async (request, h) => {
  return findBooks();
};

const getBookById = async (request, h) => {
  const bookId = request.params.id;
  const foundBook = findBookById(bookId);

  if (foundBook === undefined) {
    throw Boom.badRequest(`Book id: ${bookId} not found`);
  }
  return foundBook;
};

const createBook = (request, h) => {
  const response = {
    createdBy: request.payload.author,
  };
  return response;
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
};
