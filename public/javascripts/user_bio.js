
document.addEventListener('DOMContentLoaded', (event) => {
  addEventListeners();
  updateBio();
})



const addEventListeners = () => {
  const submit = document.querySelector("#submit");
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    sendBio();
  })
};

const updateBio = () =>{
    const email = window.localStorage.getItem('fam:email');
    if (!email) {
      window.location.replace('/signup');
      return;
    }
    console.log(email,"<<<<<email");

    fetch('/signup2/'+email)
    .then((data) => {
      return data.json();
    }).then((json) => {
      if (json.result != 'ok') {
        console.log("user doesn't exist yet");
        return;
      }
      const bio = document.querySelector("#bio");
      const city = document.querySelector("#city");
      const facebook = document.querySelector("#facebook");
      const instagaram = document.querySelector("#instagram");
      bio.value = json.bio;
      city.value = json.city;
      facebook.value = json.facebook;
      instagram.value = json.instagram;
    })
}

const sendBio = async () => {
  const email = window.localStorage.getItem('fam:email');
  if (!email) {
    window.location.replace('/signup');
    return;
  }

  try {
    const bio = document.querySelector("#bio").value;
    const city = document.querySelector("#city").value;
    const facebook = document.querySelector("#facebook").value;
    const instagaram = document.querySelector("#instagram").value;

    let data = await fetch('/signup2/'+email, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bio, city, facebook, instagaram })
    })
    const response = await data.json()
    if (response.result != 'ok') {
      alert("Failed to update bio:\n" + response.message);
    } else {
      window.location.replace('/signup3');
    }
  } catch (err) {
    console.log(err);
  }
}
