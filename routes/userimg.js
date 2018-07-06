const express = require('express');
const router = express.Router();
const knex = require('../knex');
const path = require('path');

const userImage = path.join(__dirname, '..', 'public/user_img.html');

router.get('/', (req, res, next) => {
	res.sendFile(userImage);
});

//Upload an image to database

router.post('/', (req, res, next) => {
	if(!req.body.img) {
		res.sendStatus(403);
	}
	let img = req.body.image;

	//check if that image link is already in the database
	knex('users')
		.where('image', req.body.image)
		.first()
		.then((user) => {
			if(user) {
				throw new Error('That image has already been uploaded');
			}
		})
		.returning('*')
		.then((result) => {
			res.direct('Sucess!', result);
			//send user to next step upon sucessful upload
			res.redirect('/signup2');
		})
		.catch((err) => {
			next(err);
			//can be handled in the error handler file
			res.status('401').send({error:'Error, refresh page'});
		});
});

module.exports = router;
