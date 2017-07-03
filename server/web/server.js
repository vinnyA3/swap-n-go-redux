'use strict';

const express = require('express');
const morgan = require('morgan');
const router = require('./router');
// temp mongoose connect - refactor
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/swap-n-go', {
  useMongoClient: true
});
// init express
const app = express();
// set morgan logger middleware
app.use(morgan('dev'));
app.use(router);
// routes
// export
module.exports = app;
