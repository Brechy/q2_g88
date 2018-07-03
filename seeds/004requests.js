
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('requests').del()
		.then(function () {
			// Inserts seed requests
			return knex('requests').insert([
				{user_id: 3, category_id: 1},
				{user_id: 1, category_id: 2},
				{user_id: 3, category_id: 3}
			]);
		});
};
