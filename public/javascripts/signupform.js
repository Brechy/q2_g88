console.log("hellooo");
// let signup = document.querySelector('#signup');
// console.log(signup);
document.addEventListener("DOMContentLoaded", (event) => {
  let signup = document.querySelector('#signup');
  console.log(signup,"<<<<<signup2");
    console.log("DOM fully loaded and parsed")
    signup.addEventListener("click",(event) => {
      
    console.log("DOM fully loaded and parsed")
    console.log("i am clicking you mr signup2");
          fetch('/signup', {
            method: 'POST',
            headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(info)
          })
          .then((response) => {
            return response.json()
          })
          .then((myUsers) => {
            console.log(myUsers)
          })



  })

})
