const Book = require("./Book")

class BookStore {
    constructor() {
        this.books = [
            new Book("Trabalho Eficaz com Código Legado", "Michael C. Feathers"),
            new Book("Refatoração: Aperfeiçoando o Design de Códigos Existentes", "Martin Fowler"),
            new Book("Código limpo: Habilidades práticas do Agile Software", "Robert C. Martin"),
            new Book("Arquitetura limpa: O guia do artesão para estrutura e design de software", "Robert C. Martin"),
        ]
    }

    getBooks() {
        return this.books
    }

    getBookByName(bookName) {
        return this.books.find(book => book.name === bookName)
    }

    getBooksByAuthor(bookAuthor) {
        return this.books.filter(book => book.author === bookAuthor)
    }

}

module.exports = BookStore