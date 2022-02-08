const Joi = require("joi");
const { getBooks } = require("./book.controller");
const { bookSchema } = require("./validation.schema");

module.exports = {
  getBooks: {
    method: "GET",
    path: "/api/books",
    handler: getBooks,
    options: {
      response: {
        schema: Joi.array().items(bookSchema),
        failAction: "log",
      },
    },
  },
};
