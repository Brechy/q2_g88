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

// GET 'size' Users in descending order ('reverse'), starting from 'startid'
router.get('/range/reverse/:startid/:size', (req, res) => {
	const start = parseInt(req.params.startid);
	const size = parseInt(req.params.size);
	knex('users')
	.where('id', '<=', start)
	.orderBy('id', 'desc')
	.limit(size)
	.then(data => res.json(data))
})

// GET max User ID
router.get('/range/max', (req, res) => {
  knex('users').max('id')
  .then(data => res.json(data[0].max));
})

module.exports = router;
