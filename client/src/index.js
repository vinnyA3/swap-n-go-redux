import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { loadBooks } from './ducks/books'
// App
import App from './components/App'
// Store
const store = configureStore()
store.dispatch(loadBooks())
// Target Element
const targetElement = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  targetElement
)
