const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/:user/img', (req, res, next) => {
	const email = req.params.user;
	knex.transaction(function (trx) { /* rewrote with transaction to test*/
		trx('users')
			.where('email', email)
			.returning('image_url')
			.first()
			.then((result) => {
				res.statusCode = 200;
				const response = {
					'result': 'ok',
					'blah': 'oopop',
					'value': result.image_url
				};
				res.send(JSON.stringify(response));
			//send user to next step upon sucessful upload
			});
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

/*user categories page*/
//make an alias table of offers by title for the user
//then make an alias table of requests by title for the user
//then return the union of the two alias tables
router.get('/:user/categories', (req, res, next) => {
	const email = req.params.user;
	knex.raw(`
with localEmail AS (
  select ? e
), user_offers AS (
  select
    'offer' typ,
    categories.title title
  from
    localEmail, users
    join offers on offers.users_id = users.id
    join categories on categories.id = offers.categories_id
  where
    users.email = localEmail.e
), user_requests AS (
  select
    'request' typ,
    categories.title title
  from
    localEmail, users
    join requests on requests.users_id = users.id
    join categories on categories.id = requests.categories_id
  where
    users.email = localEmail.e
)
select
  *
from
  user_offers
union
select
  *
from
  user_requests;
`, [email])
		.then((result) => {
			res.statusCode = 200;
			const response = {
				'result': 'ok',
				'offers': result.rows.filter((o) => o.typ === 'offer').map((o) => o.title),
				'requests': result.rows.filter((o) => o.typ === 'request').map((o) => o.title),
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

function qBuilder(l) {
	return `(${l.map(() => '?').join(',')})`;
}


router.put('/:user/categories', (req, res, next) => {
	if(!req.body.offers || !req.body.requests || !req.params.user) {
		res.statusCode = 400;
		res.send('{"result": "failed", "message": "offers and requests are required"}');
		return;
	}
	let offers = req.body.offers;
	let requests = req.body.requests;
	let email = req.params.user;

	knex.transaction(function(trx) {
		//delete all request and offer associatons for that user_id
		trx.raw('delete from offers where users_id in (select id from users where email = ?)', [email])
			.then(() => {
				return trx.raw('delete from requests where users_id in (select id from users where email = ?)', [email]);
			}).then(() => {
				//get 1 user_id
				return trx('users')
					.where('email', email)
					.returning('*')
					.first();
			})
			.then((result) => {
				const user_id = result.id;
				//associate the category_ids for the category title with the clicked on requests and offers
				//put the new/current associations into the request and offer join tables
				let smt = trx.raw('select 1');
				if (requests.length > 0) {
					smt = trx.raw(`insert into requests
				         select ?, id FROM categories
								 WHERE categories.title in ${qBuilder(requests)}`, [user_id].concat(requests));
				}
				return smt
					.then(() => {
						let smt = trx.raw('select 1');
						if (offers.length > 0) {
							smt = trx.raw(`insert into offers
				             				select ?, id FROM categories
										 				WHERE categories.title in ${qBuilder(offers)}`,
							[user_id].concat(offers));
						}
						return smt;
					})
					.then((result) => {
						console.log(JSON.stringify(result));
						res.statusCode = 200;
						const response = {
							'result': 'ok',
							'message': 'success'
						};
						res.send(JSON.stringify(response));
						//send user to next step upon sucessful upload
						trx.commit();
					});
			});
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
