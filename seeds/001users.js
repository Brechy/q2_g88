
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del()
		.then(function () {
			// Inserts seed entries
			return knex('users').insert([
				{name: 'Tedothynia', email: 'tedothynia@coolmom.com', city: 'Emeryville', bio: 'Mom of 3, love video games, food, and staring into the sun.', image_url: 'https://www.licenseglobal.com/sites/default/files/images/PusheenMoreLicensees.jpg', facebook: '/tedo_thynia', instagram: '@tedo_coolmom' },

				{name: 'Barb', email: 'pizza@eater.com', city: 'Bloopyly', bio: 'Barb Kellner, the Pizza Eater. I run a pizza eating business where we dispose of your leftover pizza by eating it. I have 18 fur-babies.', image_url: 'https://i.pinimg.com/originals/b2/31/ce/b231ce21f00379d9ff9c2f0a9218bda2.jpg', facebook: '/barbkellner', instagram: '@dapizzaeater'},

				{name: 'Jimbo', email: 'jimbo@sendhelp.com', city: 'Anywhoodle', bio: 'Work From Home Dad, go WFHDs!! Yeah!! Dad of quintuplets, send help.', image_url: 'https://i.pinimg.com/originals/e2/10/59/e21059c6831270c970e3aa4b576b4faf.gif', facebook: '/jimbocooldad', instagram: '@jimbo_cooldad'}
			]);
		});
};

//name, email, hashed_password, city, bio, image_url, facebook, instagram is order of table columns.
