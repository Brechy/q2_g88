document.addEventListener("DOMContentLoaded", (event) => {
    addEventListeners()
  })

function addEventListeners() {
  const signup = document.querySelector('#signup');
  signup.addEventListener("click", (event) => {
    // event.preventDefault()
    userSignup()
  })
}

const userSignup = async () => {
  try {
    const email =  document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const name = document.querySelector('#name').value

  let data = await fetch('/signup', {
      method: 'POST',
      headers: {
      'Content-Type':'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })

    const response = await data.json()
    return response

  } catch (err) {
    console.log(err);
  }
}


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
