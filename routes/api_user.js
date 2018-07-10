const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:user/img', (req, res, next) => {
	const email = req.params.user;
	knex('users')
		.where('email', email)
		.returning('image_url')
		.first()
		.then((result) => {
			res.statusCode = 200;
			const response = {
				'result': 'ok',
				'value': result.image_url
			};
			res.send(JSON.stringify(response));
			//send user to next step upon sucessful upload
		})
		.catch((err) => {
			res.statusCode = 500;
			const response = {
				'result': 'failed',
				'message': JSON.stringify(err)
			};
			res.send(JSON.stringify(response));
			next(err);
		});
});
//Upload an image to database

router.post('/:user/img', (req, res, next) => {
	if(!req.body.img || !req.params.user) {
		res.statusCode = 400;
		res.send('{"result": "failed", "message": "img is required"}');
		return;
	}
	let img = req.body.img;
	let email = req.params.user;

	//check if that image link is already in the database
	knex('users')
		.where('email', email)
		.update({
			'image_url': img
		})
		.then((result) => {
			res.statusCode = 200;
			const response = {
				'result': 'ok',
				'message': result
			};
			res.send(JSON.stringify(response));
			//send user to next step upon sucessful upload
		})
		.catch((err) => {
			res.statusCode = 500;
			const response = {
				'result': 'failed',
				'message': JSON.stringify(err)
			};
			res.send(JSON.stringify(response));
			next(err);
		});
});

module.exports = router;
