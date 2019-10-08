// eslint-disable-next-line new-cap
const router = require('express').Router();
const Trade = require('../models/trade');

router
  .get('/top', (req, res, next) => {
    Trade.hourly('top')
      .then(trades => res.json(trades))
      .catch(next);
  })

  .get('/bottom', (req, res, next) => {
    Trade.hourly('bottom')
      .then(trades => res.json(trades))
      .catch(next);
  });

module.exports = router;