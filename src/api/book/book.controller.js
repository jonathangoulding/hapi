const Boom = require('@hapi/boom')

const books = require('./books.json')
const getBooks = async (request, h) => {
    return books;
}

const getBookById = async (request, h) => {
  const bookId = request.params.id;
  const foundBook = books.find((book) => book.id.toString() === bookId)

  if(foundBook === undefined) {
    throw Boom.badRequest(`Book id: ${bookId} not found`)
  }
  return foundBook;
}

const createBook = (request, h) => {
  const response = {
     createdBy: request.payload.author
  }
  return response;
};

module.exports = {
    getBooks,
    getBookById,
    createBook
}