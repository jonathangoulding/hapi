const Joi = require("joi");
const { getBooks, getBookById, createBook } = require("./book.controller");
const { bookSchema } = require("./validation.schema");

const getBookRoute = {
  method: "GET",
  path: "/api/book",
  handler: getBooks,
  options: {
    response: {
      schema: Joi.array().items(bookSchema),
      failAction: "log",
    },
    description: "Get Books",
    notes: "Returns the books",
    tags: ["api"],
  },
};

const createBookRoute = {
  method: "POST",
  path: "/api/book",
  handler: createBook,
  options: {
    validate: {
      payload: Joi.object({
        post: Joi.string().max(140).required(),
        author: Joi.string().required(),
      }),
    },
    description: "Create Book",
    notes: "Creates a book",
    tags: ["api"],
  },
};

const getBookByIdRoute = {
  method: "GET",
  path: "/api/book/{id}",
  handler: getBookById,
  options: {
    response: {
      schema: bookSchema,
      failAction: "log",
    },
    validate: {
      params: Joi.object({
        id: Joi.string().required(),
      }),
    },
    description: "Get Book by Id",
    notes: "Returns the book with the correct ID",
    tags: ["api"],
  },
};

module.exports = [getBookRoute, createBookRoute, getBookByIdRoute];
