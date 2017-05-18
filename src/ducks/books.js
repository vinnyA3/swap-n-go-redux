// API
import booksApi from '../api/mockBooksApi'

export const types = {
  LOAD_BOOKS_SUCCESS: 'LOAD_BOOKS_SUCCESS'
}

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books
    default:
      return state
  }
}

export const actions = {
  loadBooksSuccess: (books) => ({type: types.LOAD_BOOKS_SUCCESS, books})
}

export function loadBooks () {
  return function (dispatch) {
    return booksApi.getAllBooks().then(books => {
      dispatch(actions.loadBooksSuccess(books))
    }).catch(err => {
      throw err
    })
  }
}
