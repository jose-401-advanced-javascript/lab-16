// eslint-disable-next-line new-cap
const router = require('express').Router();
const Grade = require('../models/grade');

router
  .get('/', (req, res, next) => {
    Grade.gradesPerClass()
      .then(grades => res.json(grades))
      .catch(next);
  });

module.exports = router;