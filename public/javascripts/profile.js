const id =
	// return :userid if in path ("/profile/2")
	window.location.pathname.replace('/profile', '').replace('/', '') ||
	// else check localstorage for id
	window.localStorage.getItem('fam:id') ||
	// alert of error
	alert("You must login to see your profile, showing you a sample user instead")

console.log(id,"<<<id");

const name = document.querySelector("#username");
const bio = document.querySelector("#bio");
const offersul = document.querySelectorAll("#offers")[0];
const requestsul = document.querySelectorAll("#requests")[0];



fetch('/users/' + id)
.then(res => res.json())
.then(user => {
	name.innerText = user[0].name
	bio.innerText = user[0].bio
	// offers
		// for (offer of offers){
		// 	let li = document.createElement('li')
		// 	li.innerText = user[0].offer;
		// 	offer.appendChild(li);
		// }
	// requests
})


//Getting offer from the offer api, assigning each to the list of offers.
fetch('/offers/'+id)
.then(res => res.json())
.then (offers => {
	offers.forEach((offer) => {
		let li = document.createElement('li')
		li.innerText = offer.title;
		offersul.appendChild(li)
})
} )


fetch('/requests/'+id)
.then(res => res.json())
.then (requests => {
	requests.forEach((request) => {
		console.log(request.title,"<<<request");
		let li = document.createElement('li')
		console.log(li,"<<<li");
		li.innerText = request.title;
		requestsul.appendChild(li)

})
} )
