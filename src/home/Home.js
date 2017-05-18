import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  bookRow (book) {
    return (
      <div key={book.id}>
        <h1>{book.title}</h1>
        <p>{book.owner}</p>
      </div>
    )
  }
  render () {
    return (
      <div>
        <h1>Test... Display Books</h1>
        {this.props.books.map(this.bookRow)}
      </div>
    )
  }
}

App.propTypes = {
  books: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, null)(App)
