//DOM loaded and starts looking for buttons
	console.log("i am here do you see me");
document.addEventListener('DOMContentLoaded', (event) => {

  userEmail();
	usersData();

});

const userEmail = () =>{
   const email = window.localStorage.getItem('fam:email');
   console.log(email,"<<<<<email");
   return email;
}



const usersData = async() => {
try{
console.log('i am here');
	let username = document.querySelector("#username").innerText;
	let bio = document.querySelector("#bio").innerText;
	let offer = document.querySelector("#offers").innerText;
	let request = document.querySelector("#requests").innertext;

    let data = await fetch('/profile/:id')
    .then((response) => {
         return response.json();
    }).then((data)=> {
			console.log(data,"<<<");
			username = data.name;
			bio = data.bio
			
		})
	} catch (err) {
    console.log(err);
  }
  }
