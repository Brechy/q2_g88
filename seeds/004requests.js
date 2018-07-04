
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('requests').del()
		.then(function () {
			// Inserts seed requests
			return knex('requests').insert([
				{id:1,users_id: 3, categories_id: 1},
				{id:2,users_id: 1, categories_id: 2},
				{id:3,users_id: 3, categories_id: 3}
			]);
		});
};
