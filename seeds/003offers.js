
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('offers').del()
		.then(function () {
			// Inserts seed offers
			return knex('offers').insert([
				{id:1,users_id: 2, categories_id: 1},
				{id:2,users_id: 2, categories_id: 2},
				{id:3,users_id: 3, categories_id: 3}
			]);
		});
};
