const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt');
const path = require('path');
const md5 = require('md5');

const signupHTML = path.join(__dirname, '..', 'public/signupform.html');

router.get('/', (req, res, next) => {
	res.sendFile(signupHTML);
});

// REGISTER a user
router.post('/', (req, res, next) => {
	console.log('/signup was hit');
	console.log('req body', req.body);
	res.contentType('application/json');
	if (!req.body.email || !req.body.password || !req.body.name) {
		res.statusCode = 400;
		res.send('{"result": "failed", "message": "email, password, and name are required."}');
		return;
	}
	let email = req.body.email;
	let name = req.body.name;
	let password = req.body.password;

	//check the email doesn't already exist in users table
	knex('users')
		.where('email', req.body.email)
		.first()
		.then((user) => {
			if(user) {
				res.statusCode = 409;
				res.send('{"result": "failed", "message": "Oops that email is already used"}');
				return;
			}

			// hash the password
			var hashed = bcrypt.hashSync(req.body.password, 8);

			// create new user record with the email + hashed password
			knex('users')
				.insert({
					name: req.body.name,
					email: req.body.email,
					hashed_password: hashed,
					image_url: `https://www.gravatar.com/avatar/${md5(req.body.email)}.jpg`
				})
				.returning('*')
				.then((result) => {
					console.log('OK', result);
					res.statusCode = 200;
					res.send(`{"result": "ok", "user": ${JSON.stringify(result)}}`);
					// res.redirect('/signup1');
				});
		})
		.catch((err) => {
			next(err);
			console.log(err, 'error');
		});
});



module.exports = router;
