
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del()
		.then(function () {
			// Inserts seed entries
			return knex('users').insert([
				{id: 1, name: 'Tedothynia', bio: 'Mom of 3, love video games, food, and staring into the sun.'},
				{id: 2, name: 'Barb', bio: 'Barb Kellner, the Pizza Eater. I run a pizza eating business where we dispose of your leftover pizza by eating it. I have 18 fur-babies.'},
				{id: 3, name: 'Jimbo', bio: 'Work From Home Dad, go WFHDs!! Yeah!! Dad of quintuplets, send help.'}
			]);
		});
};
