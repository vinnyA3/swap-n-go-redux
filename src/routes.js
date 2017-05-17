import React from 'react'
import { Route } from 'react-router-dom'
import App from './components/App'
import SignIn from './components/auth/Signin'

export default (
  <div>
    <Route exact path='/' component={App} />
    <Route path='/signin' component={SignIn} />
  </div>
)
