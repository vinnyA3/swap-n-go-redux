import delay from './delay'

const Books = [
  {
    id: '1vincent-aceto',
    title: 'Functional Programming in JS',
    imgLink: 'images/fnprogramming.jpg',
    owner: 'Vincent Aceto'
  },
  {
    id: '2julie-marie',
    title: 'Java for Dummies',
    imgLink: 'images/javadummies.jpg',
    owner: 'Julie Marie'
  },
  {
    id: '3annie-aceto',
    title: 'Cooking 101',
    imgLink: 'images/cooking101.jpg',
    owner: 'Annie Marie'
  }
]

const replaceAll = (str, find, repl) => {
  return str.replace(new RegExp(find, 'g'), repl)
}

const generateId = (book) => {
  return replaceAll(book.owner, ' ', '-')
}

export default class BooksApi {
  static getAllBooks () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...Books])
      }, delay)
    })
  }

  static saveBook (book) {
    book = Object.assign({}, book)
    const minBookTitleLength = 2
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (book.title.length < minBookTitleLength) {
          reject(
            new Error(`The title of the book must be: ${minBookTitleLength} chars long!`)
          )
        }
        if (book.id) {
          const existingBookId = Books.findIndex(i => i.id === book.id)
          Books.splice(existingBookId, 1, book)
        } else {
          book.id = generateId(book)
          book.imgLink = `/images/${book.id + book.title}`
          Books.push(book)
        }
        resolve(book)
      }, delay)
    })
  }
}
