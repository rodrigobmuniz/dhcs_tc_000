const express = require('express')
const { helloWorld, getAllBooks, getBookByName, getBooksByAuthor } = require('./src/books')
const app = express()
const port = 3000

app.get('/book', (req, res) => {
    res.send(getAllBooks())
})

app.get('/book/:bookName', (req, res) => {
    res.send(getBookByName(req.params.bookName))
})

app.get('/book/author/:authorName', (req, res) => {
    res.send(getBooksByAuthor(req.params.authorName))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})