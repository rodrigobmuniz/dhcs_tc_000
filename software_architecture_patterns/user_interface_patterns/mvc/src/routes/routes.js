const { getBooks, getBookByName, getBooksByAuthor } = require("../controllers/bookStore")

const routes = (app) => {
    app.route("/book").get(getBooks);
    app.route("/book/:bookName").get(getBookByName)
    app.route("/book/author/:authorName").get(getBooksByAuthor)
}

module.exports = routes;
