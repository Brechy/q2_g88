
document.addEventListener("DOMContentLoaded", (event) => {
    addEventListeners()
    })

function Validation() {
  var txt = document.querySelector("#city")
    if (txt.value !== 'San Francisc'){
      alert("Invalid city name");
    }  else{
        alert('Valid city name');
          return true;
    }
