import delay from './delay'

const Books = [
  {
    id: '1vincent',
    title: 'Functional Programming in JS',
    imgLink: 'images/fnprogramming.jpg',
    owner: 'Vincent Aceto'
  }
]

export default class BooksApi {
  static getAllBooks () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...Books])
      }, delay)
    })
  }
}

