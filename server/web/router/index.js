'use strict';

const router = require('express').Router();
const api = require('./api');

// endpoints
router.get('/', (req, res) => {
  res.status(200).send({ status: 'Okay', message: 'welcome!' });
});

router.get('/api/v1/books', api.books.getAllBooks);

module.exports = router;
