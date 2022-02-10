const books = require("./books.json");
const BookStore = require("./model");

const findBooks = async () => {
  try {
    let vals = await BookStore.fetchAll();
    console.log(vals.toJSON());
    return vals.toJSON();
  } catch (e) {
    console.log(`Failed to fetch data: ${e}`);
  }
};

const findBookById = (bookId) =>
  books.find((book) => book.id.toString() === bookId);

const saveBook = async (payload) => {
  try {
    return await BookStore.forge(payload).save()
  } catch (error) {
    console.log(`Failed to create: ${error}`);
  }
}

module.exports = {
  findBookById,
  findBooks,
  saveBook
};
