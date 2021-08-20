const BookStore = require("../models/BookStore");

const getBooks = (req, res) => {
    const booksStore = new BookStore();
    res.status(200).json(booksStore.getBooks());
    return
}

const getBookByName = (req, res) => {
    const { bookName } = req.params
    const booksStore = new BookStore();
    res.status(200).json(booksStore.getBookByName(bookName));
    return
}

const getBooksByAuthor = (req, res) => {
    const { authorName } = req.params
    const booksStore = new BookStore();
    res.status(200).json(booksStore.getBooksByAuthor(authorName));
    return
}

module.exports = {
    getBooks,
    getBookByName,
    getBooksByAuthor,
}