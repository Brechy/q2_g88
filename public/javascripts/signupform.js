console.log("hellooo");
// let signup = document.querySelector('#signup');
// console.log(signup);

document.addEventListener("DOMContentLoaded", (event) => {
    addEventListeners()
    })

function addEventListeners() {
  const signup = document.querySelector('#signup');
  signup.addEventListener("click", (event) => {
    event.preventDefault()
    userSignup()
  })

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
  email.setCustomValidity("I expect an e-mail, darling!");
    } else {
      email.setCustomValidity("");
    }
    console.log('event listeners added');
  })
}


const userSignup = async () => {
  try {
  const email =  document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const name = document.querySelector('#name').value
  console.log("in user signup", email, password, name);

let data = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
    'Content-Type':'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })

  let response = await data.json()

  console.log(response,"<<<<I am response");
  return response

} catch (err) {
  console.log(err);
}
}



// function userSignupOld() {
//   const email =  document.querySelector('#email').value;
//   const password = document.querySelector('#password').value;
//   const name = document.querySelector('#name').value
//   console.log("in user signup", email, password, name);
//
//   fetch('http://localhost:3000/signup', {
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
