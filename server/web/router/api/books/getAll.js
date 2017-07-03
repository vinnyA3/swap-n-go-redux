const Book = require('../../../../models/Book');
const Task = require('data.task');
const Either = require('data.either');
const { Right, Left } = Either;
const { eitherToTask } = require('../../../../utils');

const find = new Task((rej, res) =>
  Book.find({}).then(books => res(Either.fromNullable(books))).catch(err => rej(err))
);

const getAllBooks = (req, res) => {
  find.chain(eitherToTask).fork(console.error, books => {
    return res.status(200).send({ books });
  });
};

module.exports = getAllBooks;
