
document.addEventListener('DOMContentLoaded', (event) => {
	addEventListeners();
});

function addEventListeners() {
	const signup = document.querySelector('#signup');
	signup.addEventListener('click', (event) => {
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
		}).then (data =>
			data.json()
		).then(json => {
			if (json.result != 'ok') {
				alert('Error:\n'+json.message);
			} else {
				window.localStorage.setItem('fam:email', email);
				window.location.replace('/signup1');
			}
		});
	} catch (err) {
		console.log('In error catcher:', err);
	}
};
