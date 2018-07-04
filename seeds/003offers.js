
exports.seed = function(knex, Promise) {
	return knex('offers').del()
		.then(function () {
			return knex('offers').insert([
				{users_id: 2, categories_id: 1},
				{users_id: 2, categories_id: 2},
				{users_id: 3, categories_id: 3}
			]);
		});
};
