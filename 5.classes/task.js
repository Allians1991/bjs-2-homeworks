// 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.state = 100,
        this.type = null
    }

    fix() {
        this.state *= 1.5;
    }

    set state(val) {
        if (val < 0) {
            this._state = 0;
        } else if (val > 100) {
            this._state = 100;
        } else {
            this._state = val;
        }
    }

    get state() {
        return this._state
    }

}

class Magazine extends PrintEditionItem {
    type = "magazine";
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author,
        this.type = 'book';
    }
}

class NovelBook extends Book {
    type = "novel"
}
class FantasticBook extends Book {
    type = "fantastic"
}
class DetectiveBook extends Book {
    type = "detective"
}


class Library {
    constructor(name) {
        this.name = name,
        this.books = []
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
       return this.books.find(book => book[type] === value) || null
    }

    giveBookByName(bookName) {
        const findBook = this.findBookBy('name', bookName);
        if(!findBook) {
            return null
        }
        this.books = this.books.filter(book => book !==findBook);
        return findBook
    }
}






