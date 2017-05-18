import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store/configureStore'
import { loadBooks } from './ducks/books'
import routes from './routes'
// Store
const store = configureStore()
store.dispatch(loadBooks())
// Target Element
const targetElement = document.getElementById('app')

render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  targetElement
)
