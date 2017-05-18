import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'
import SignIn from './auth/Signin'

export default (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/signin' component={SignIn} />
  </div>
)
