
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('categories').del()
		.then(function () {
			// Inserts seed categories
			return knex('categories').insert([
				{title: 'Cleaning'},
				{title: 'Cooking'},
				{title: 'Chatting'}
			]);
		});
};
