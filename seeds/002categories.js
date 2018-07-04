
exports.seed = function(knex, Promise) {
	return knex('categories').del()
		.then(function () {
			return knex('categories').insert([
				{id:1,title: 'Cleaning'},
				{id:2,title: 'Cooking'},
				{id:3,title: 'Chatting'}
			]);
		});
};
