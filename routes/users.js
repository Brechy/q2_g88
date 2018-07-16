const express = require('express');
const router = express.Router();
const knex = require('../knex');

// GET All Users
router.get('/', (req, res, next) =>
	knex('users')
	.then(rows => res.json(rows))
);

// GET Specific User
router.get('/:userid', (req, res, next) => {
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.json(data)
  })
})

// GET 'size' Users, starting from 'startid'
router.get('/range/:startid/:size', (req, res) => {
	const start = parseInt(req.params.startid);
	const size = parseInt(req.params.size);
	knex('users')
	.where('id', '>=', start)
	.limit(size)
	.then(data => res.json(data))
})
module.exports = router;
