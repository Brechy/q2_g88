
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('offers').del()
		.then(function () {
			// Inserts seed entries
			return knex('offers').insert([
				{user_id: 2, category_id: 1},
				{user_id: 2, category_id: 2},
				{user_id: 2, category_id: 3}
			]);
		});
};
