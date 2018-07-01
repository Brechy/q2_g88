
exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('categories').del()
		.then(function () {
			// Inserts seed entries
			return knex('categories').insert([
				{id: 1, title: 'Cleaning', description: 'Light cleaning includes, wiping down surfaces, taking out garbage or recycling, vacuuming, or getting the dishes caught up. Total task time should not be expected to take someone more than 45 minutes. Great as a group activity with other Fam members!'},
				{id: 2, title: 'Cooking', description: 'Help each other out by making one extra freezer meal to give to a Fam member. Get all the Fam members together once a week to do a weekly meal prep session. Or simply come over to make or bring a new mom some lunch so she can stay in bed and rest.'},
				{id: 3, title: 'Chatting', description: 'It gets pretty lonely and isolating being a parent. Schedule time time with a Fam member to chat on the phone or even visit a Fam member at their home for some coffee, cookies, and chatting. You can be as open or as guarded as you feel necessary. This is your time to let it out.'}
			]);
		});
};
