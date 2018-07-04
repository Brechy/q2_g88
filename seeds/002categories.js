
exports.seed = function(knex, Promise) {
	return knex('categories').del()
		.then(function () {
			return knex('categories').insert([
				{title: 'Cleaning'},
				{title: 'Cooking'},
				{title: 'Chatting'}
			]);
		});
};
