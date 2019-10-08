// eslint-disable-next-line new-cap
const router = require('express').Router();
const Student = require('../models/student');

router
  .get('/', (req, res, next) => {
    Student.grades()
      .then(grades => res.json(grades))
      .catch(next);
  });

module.exports = router;