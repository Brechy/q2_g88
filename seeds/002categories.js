
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('categories').del()
		.then(function () {
			// Inserts seed categories
			return knex('categories').insert([
				{id:1,title: 'Cleaning'},
				{id:2,title: 'Cooking'},
				{id:3,title: 'Chatting'}
			]);
		});
};
