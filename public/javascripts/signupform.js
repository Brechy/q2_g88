
document.addEventListener('DOMContentLoaded', (event) => {
	addEventListeners();
});

function addEventListeners() {
	const signup = document.querySelector('#form');
	signup.addEventListener('submit', event => {
		event.preventDefault();
		userSignup();
	});


}


const userSignup = () => {
	try {
		const email =  document.querySelector('#email').value;
		const password = document.querySelector('#password').value;
		const name = document.querySelector('#name').value;


		fetch('/signup', {
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({ name, email, password })
		}).then (data => {
			return data.json()
		}).then(json => {
			if (json.result != 'ok') {
				alert('Error:\n'+json.message);
			} else {
				console.log(json,"<<<json");
				const id = json.user[0].id;
				console.log(id,"<<<<<id");
				window.localStorage.setItem('fam:email', email);
				window.localStorage.setItem('fam:id', id);
				window.location.replace('/signup1');
			}
		});
	} catch (err) {
		console.log('In error catcher:', err);
	}
};
