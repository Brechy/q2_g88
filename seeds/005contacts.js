exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('contacts').del()
		.then(function () {
			// Inserts seed entries
			return knex('contacts').insert([
				{id: 1, user_id: 1, type: 'phone' data: 907-555-1337},
				{id: 2, user_id: 1, type: 'email', data: '1337@dood.net'},
				{id: 3, user_id: 1, type: 'instagram', data: '@insta1337'}
			]);
		});
};
