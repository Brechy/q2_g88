const express = require('express');
const router = express.Router();
// const knex = require('../knex');
const path = require('path');

const userImage = path.join(__dirname, '..', 'public/user_img.html');

router.get('/', (req, res) => {
	res.sendFile(userImage);
});

module.exports = router;
