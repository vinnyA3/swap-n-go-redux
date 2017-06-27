'use strict'

const express = require('express')
const morgan = require('morgan')

// init express
const app = express()
// set morgan logger middleware
app.use(morgan('dev'))
// routes
// export
module.exports = app
