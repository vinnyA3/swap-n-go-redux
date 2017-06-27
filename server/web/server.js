'use strict'

const express = require('express')
const morgan = require('morgan')
const router = require('./router')

// init express
const app = express()
// set morgan logger middleware
app.use(morgan('dev'))
app.use(router)
// routes
// export
module.exports = app
