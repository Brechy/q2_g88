const express = require('express');
const router = express.Router();
const knex = require('../knex');
const path = require('path');

//path to html file
const imgUpload = path.join(__dirname, '..', 'public/user_img.html');

router.get('/', (req, res, next) => {
	res.sendFile(imgUpload);
});

module.exports = router;
