
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del()
		.then(function () {
			// Inserts seed entries
			return knex('users').insert([
				{name: 'Tedothynia', bio: 'Mom of 3, love video games, food, and staring into the sun.', email: 'tedothynia@coolmom.com', instagram: '@tedo_thynia', facebook: '/tedo_coolmom', city: 'Emeryville'},
				{name: 'Barb', bio: 'Barb Kellner, the Pizza Eater. I run a pizza eating business where we dispose of your leftover pizza by eating it. I have 18 fur-babies.', email: 'pizza@eater.com', instagram: '@dapizzaeater', facebook: '/barbkellner', city: 'Bloopyly'},
				{name: 'Jimbo', bio: 'Work From Home Dad, go WFHDs!! Yeah!! Dad of quintuplets, send help.', email: 'jimbo@sendhelp.com', instagram: '@jimbo_cooldad', facebook: '/jimbocooldad', city: 'Anywhoodle'}
			]);
		});
};
