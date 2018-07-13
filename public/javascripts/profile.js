//DOM loaded and starts looking for buttons
	console.log("i am here do you see me");
document.addEventListener('DOMContentLoaded', (event) => {

  userId();
	usersData();

});

const userId = () =>{

	 const id = window.localStorage.getItem('fam:id');
   console.log(id,"<<<<<id");
   return id;
}




const usersData = async() => {
try{
console.log('i am here');
	let username = document.querySelector("#username").innerText;
	let bio = document.querySelector("#bio").innerText;
	let offer = document.querySelector("#offers").innerText;
	let request = document.querySelector("#requests").innertext;

    let data = await fetch('/profile/api/:id',{method :'GET'})
    .then((response) => {
         return response.json();
    }).then((data)=> {
			console.log(data,"<<<data");
			 // username = data.name;
			 // bio = data.bio

		})
	} catch (err) {
    console.log(err);
  }
  }
