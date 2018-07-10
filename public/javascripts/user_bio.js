
document.addEventListener('DOMContentLoaded', (event) => {

  addEventListeners();
})



const addEventListeners = () => {
  event.preventDefault();
  const submit = document.querySelector("#submit");
    submit.addEventListener('click',(event) => {
    userBio ();
    })
};
 const userEmail = () =>{
   	const email = window.localStorage.getItem('fam:email');
    console.log(email,"<<<<<email");
    return email;
 }
// const updateUser = () => {
//   console.log("i am here");
// 	const email = window.localStorage.getItem('fam:email');
//   console.log(email,"<<<< I am email");
// 	if(!email) {
// 		window.location.replace('/signup1');
// 		return;
// 	}
// }

const userBio = async () => {
  try {
    const bio = document.querySelector("#bio").value;
    const city = document.querySelector("#city").value;
    const facebook = document.querySelector("#facebook").value;
    const instagaram = document.querySelector("#instagram").value;

    let data = await fetch('/signup2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.strigify({ bio, city, facebook, instagaram })
    })
    const response = await data.json()
    return response;
  } catch (err) {
    console.log(err);
  }
}
