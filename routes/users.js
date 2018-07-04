const express = require('express');
const router = express.Router();
const knex = require('../knex')

/* GET users listing. */
router.get('/users', (req, res, next) => {
  knex('users')
  .then(rows => {
    res.send(rows);
  })

  .catch(err => {
    next(err);
  })
});

module.exports = router;
