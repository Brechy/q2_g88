const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');
const path = require('path');
const md5 = require('md5');

const profiltHTML = path.join(__dirname, '..', 'public/profile.html');

router.get('/', (req, res, next) => {
	res.sendFile(profileHTML);
});
