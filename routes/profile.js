const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

const profiltHTML = path.join(__dirname, '..', 'public/profile.html');

router.get('/', (req, res, next) => {
	res.sendFile(profiltHTML);
});

module.exports = router;
