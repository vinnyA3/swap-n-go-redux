import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
// Target Element
const targetElement = document.getElementById('app')

render(
  <Router>
    {routes}
  </Router>,
  targetElement
)
