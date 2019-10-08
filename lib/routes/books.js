// eslint-disable-next-line new-cap
const router = require('express').Router();
const Book = require('../models/book');

router
  .get('/', (req, res, next) => {
    Book.pageCount()
      .then(authors => res.json(authors))
      .catch(next);
  }); 

module.exports = router;