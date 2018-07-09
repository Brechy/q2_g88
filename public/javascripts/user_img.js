//DOM loaded and starts looking for buttons
document.addEventListener('DOMContentLoaded', (event) => {
	addEventListeners();
	updateImage();
});

//if one of the two buttons get clicked, do the thing
function addEventListeners() {
	const next = document.querySelector('#next');
	next.addEventListener('click', (event) => {
		event.preventDefault();
		window.location.replace('/signup2');
	});
	const submit = document.querySelector('#submit');
	submit.addEventListener('click', (event) => {
		event.preventDefault();
		userImage();
	});
}

//user's email is stored in local storage in signup page. Here we check database to see if there is a default image url saved in the db (gravatar)
//if image exists, populate DOM with gravatar image
const updateImage = () => {
	const email = window.localStorage.getItem('fam:email');
	if(!email) {
		window.location.replace('/signup');
		return;
	}
	fetch('http://localhost:3000/api/v1/user/'+ email +'/img')
		.then (data =>
			data.json()
		).then(json => {
			if (json.result != 'ok') {
				alert('Error: \n' + json.message);
			} else {
				const newImage = `url('${encodeURI(json.value)}')`;
				document.querySelector('#userImgContainer').style.backgroundImage = newImage;
			}
		});
};
//if there is no gravatar connected to the email, the user will supply their own image URL, this gets updated in the database
const userImage = () => {
	const email = window.localStorage.getItem('fam:email');
	if(!email) {
		window.location.replace('/signup');
		return;
	}
	try {
		const image = document.querySelector('#userImage').value;

		fetch('http://localhost:3000/api/v1/user/'+ email +'/img', {
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({'img': image})
		}).then (data =>
			data.json()
		).then(json => {
			if(json.result != 'ok') {
				alert('Error: \n'+json.message);
			} else {
				updateImage();
			}
		});
	} catch (err) {
		console.log('In error catcher:', err);
	}
};
