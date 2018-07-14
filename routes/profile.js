const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

const profileHTML = path.join(__dirname, '..', 'public/profile.html');

// userid is optional bc of "?", if given: goes to profile page of user with that ID, else goes to my profile
router.get('/:userid?', (req, res, next) => {
	res.sendFile(profileHTML);
});


module.exports = router;
