const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

router.get('/:userid', (req, res, next) => {
	knex
	// SELECT requests.id, categories.title
		.select('categories.title')
	// FROM requests
	.from('requests')
	// INNER JOIN categories
	// ON requests.categories_id=categories.id
	.innerJoin('categories', 'requests.categories_id', 'categories.id')
	// WHERE requests.users_id=2;
	.where('requests.users_id', req.params.userid)
	.then(data => res.json(data));
})

module.exports = router;
