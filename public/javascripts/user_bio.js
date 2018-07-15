
document.addEventListener('DOMContentLoaded', (event) => {
  checkEmail();
  addEventListeners();
})



const addEventListeners = () => {
  const form = document.querySelector("#form");
  form.addEventListener('submit', event => {
    event.preventDefault();
    userBio();
  })
};
 const checkEmail = () =>{
   	const email = window.localStorage.getItem('fam:email');
  	if(!email) {
      alert('Redirecting to beginning of signup');
  		window.location.replace('/signup');
  	}
    console.log(email,"<<<<<email");
    return email;
 }

const userBio = async () => {
  try {
    const bio = document.querySelector("#bio").value;
    const city = document.querySelector("#city").value;
    const facebook = document.querySelector("#facebook").value;
    const instagram = document.querySelector("#instagram").value;
    const email = checkEmail();

    let data = await fetch('/signup2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bio, city, facebook, instagram, email })
    })
    const response = await data.json()
    return response;
  } catch (err) {
    console.log(err);
  }
}
