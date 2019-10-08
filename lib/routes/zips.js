// eslint-disable-next-line new-cap
const router = require('express').Router();
const Zip = require('../models/zip');

router
  .get('/', (req, res, next) => {
    Zip.populous()
      .then(zips => res.json(zips))
      .catch(next);
  });

module.exports = router;