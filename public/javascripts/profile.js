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
const offers = document.querySelector("#offers");
const requests = document.querySelector("#requests");

fetch('/users/' + id)
.then(res => res.json())
.then(user => {
	name.innerText = user[0].name
	bio.innerText = user[0].bio
	// offers
	// for (offer of offers)
	// requests
})



//
// //DOM loaded and starts looking for buttons
// console.log("i am here do you see me");
// document.addEventListener('DOMContentLoaded', (event) => {
//
//   userId();
// 	usersData();
//
// });
//
// const userId = () =>{
// 	 const id = window.localStorage.getItem('fam:id');
//    console.log(id,"<<<<<id");
//    return id;
// }
//
//
//
//
// const usersData = async() => {
// try{
// console.log('i am here');
// 	let username = document.querySelector("#username").innerText;
// 	let bio = document.querySelector("#bio").innerText;
// 	let offer = document.querySelector("#offers").innerText;
// 	let request = document.querySelector("#requests").innertext;
//
//     let data = await fetch('/profile/api/:id',{method :'GET'})
//     .then((response) => {
//          return response.json();
//     }).then((data)=> {
// 			console.log(data,"<<<data");
// 			 // username = data.name;
// 			 // bio = data.bio
//
// 		})
// 	} catch (err) {
//     console.log(err);
//   }
//   }
