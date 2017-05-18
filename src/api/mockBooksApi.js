import delay from './delay'

const Books = [
  {
    id: '1vincentimages/fnprogramming.jpg',
    title: 'Functional Programming in JS',
    imgLink: 'images/fnprogramming.jpg',
    owner: 'Vincent Aceto'
  },
  {
    id: '2julieimages/javadummies.jpg',
    title: 'Java for Dummies',
    imgLink: 'images/javadummies.jpg',
    owner: 'Julie Marie'
  },
  {
    id: '1annieimages/cooking101.jpg',
    title: 'Cooking 101',
    imgLink: 'images/cooking101.jpg',
    owner: 'Annie Marie'
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
