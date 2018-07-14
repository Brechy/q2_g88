const express = require('express');
const router = express.Router();
const knex = require('../knex');

/* GET users listing. */
router.get('/', (req, res, next) =>
	knex('users')
	.then(rows => res.json(rows))
);

//this route is for getting one user as JSON.
router.get('/:userid', (req, res, next) => {
  // USE KNEX TO GET A SPECIFIC USER
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.json(data)
  })
})

module.exports = router;
