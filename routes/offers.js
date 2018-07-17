const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

router.get('/:userid', (req, res, next) => {
	knex
	// SELECT offers.id, categories.title
	.select('categories.title')
	// FROM offers
	.from('offers')
	// INNER JOIN categories
	// ON offers.categories_id=categories.id
	.innerJoin('categories', 'offers.categories_id', 'categories.id')
	// WHERE offers.users_id=2;
	.where('offers.users_id', req.params.userid)
	.then(data => res.json(data));
})

module.exports = router;
