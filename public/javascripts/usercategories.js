//DOM loaded and starts looking for buttons
document.addEventListener('DOMContentLoaded', (event) => {
	addEventListeners();
	updateCategories();
});

//if the next button is clicked, take user to next page
function addEventListeners() {
	const submit = document.querySelector('#submit');
	submit.addEventListener('click', (event) => {
		event.preventDefault();
		window.location.replace('/members');
	});

	document.querySelectorAll('.famoffer').forEach((element) => {
		element.addEventListener('click', () => {
			sendCategories();
		});
	});

	document.querySelectorAll('.famrequest').forEach((element) => {
		element.addEventListener('click', () => {
			sendCategories();
		});
	});


}
const updateCategories = () => {
	const email = window.localStorage.getItem('fam:email');
	if(!email) {
		alert('Redirecting to beginning of signup')
		window.location.replace('/signup');
		return;
	}
	fetch('/api/v1/user/'+ email +'/categories')
		.then (data =>
			data.json()
		).then(json => {
			const offers = json.offers;
			const requests = json.requests;
			for (let i = 0; i < offers.length; i++) {
				document.querySelectorAll('.famoffer').forEach((element) => {
					if (element.parentNode.textContent.trim() === offers[i]) {
						element.checked = true;
					}
				});
			}
			for (let i = 0; i < requests.length; i++) {
				document.querySelectorAll('.famrequest').forEach((element) => {
					if (element.parentNode.textContent.trim() === requests[i]) {
						element.checked = true;
					}
				});
			}
			if (json.result != 'ok') {
				alert('Error: \n' + json.message);
			} else {
				// document.querySelector('#').style.backgroundImage;
			}
		});
};
const sendCategories = () => {
	const email = window.localStorage.getItem('fam:email');
	if(!email) {
		alert('Redirecting to beginning of signup');
		window.location.replace('/signup');
		return;
	}
	try {
		const requests = [];
		const offers = [];

		document.querySelectorAll('.famrequest').forEach((element) => {
			if(element.checked) {
				requests.push(element.parentNode.textContent.trim());
			}
		});
		document.querySelectorAll('.famoffer').forEach((element) => {
			if(element.checked) {
				offers.push(element.parentNode.textContent.trim());
			}
		});

		fetch('/api/v1/user/'+ email +'/categories', {
			method: 'PUT',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({'requests': requests, 'offers': offers})
		}).then (data =>
			data.json()
		).then(json => {
			if(json.result != 'ok') {
				alert('Error: \n'+json.message);
			}
		});
	} catch (err) {
		console.log('In error catcher:', err);
	}
};
