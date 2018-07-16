const express = require('express');
const router = express.Router();
// const knex = require('../knex');
const path = require('path');

const userCategories = path.join(__dirname, '..', 'public/user_categories.html');

router.get('/', (req, res) => {
	res.sendFile(userCategories);
});

module.exports = router;
