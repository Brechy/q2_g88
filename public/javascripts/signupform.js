
console.log('hellooo');
// let signup = document.querySelector('#signup');
// console.log(signup);

document.addEventListener('DOMContentLoaded', (event) => {
	addEventListeners();
});

function addEventListeners() {
	const signup = document.querySelector('#signup');
	signup.addEventListener('click', (event) => {
		event.preventDefault();
		userSignup();
	});

//   email.addEventListener("input", function (event) {
//     if (email.validity.typeMismatch) {
//   email.setCustomValidity("I expect an e-mail, darling!");
//     } else {
//       email.setCustomValidity("");
//     }
//     console.log('event listeners added');
//   })
}


const userSignup = () => {
	try {
		const email =  document.querySelector('#email').value;
		const password = document.querySelector('#password').value;
		const name = document.querySelector('#name').value;
		console.log('in user signup', email, password, name);

		fetch('http://localhost:3000/signup', {
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



// console.log("in user signup", email, password, name);
// let signup = document.querySelector('#signup');
// console.log(signup);
//   email.addEventListener("input", function (event) {
//     if (email.validity.typeMismatch) {
//   email.setCustomValidity("I expect an e-mail, darling!");
//     } else {
//       email.setCustomValidity("");
//     }
//     console.log('event listeners added');
//   })
// function userSignupOld() {
//   const email =  document.querySelector('#email').value;
//   const password = document.querySelector('#password').value;
//   const name = document.querySelector('#name').value
//   console.log("in user signup", email, password, name);
//
//   fetch('/signup', {
//     method: 'POST',
//     headers: {
//     'Content-Type':'application/json'
//     },
//   body: JSON.stringify({ name, email, password })
//   })
//   .then((response) => {
//     console.log("RESPONSE", response.json());
//     return response.json()
//   })
//   .then((myUsers) => {
//     console.log(myUsers)
//   })
// }
