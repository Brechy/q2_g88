// SELECT DOM ELEMENTS

const img1 = document.querySelectorAll('.user-image1');
const img2 = document.querySelectorAll('.user-image2');
const img3 = document.querySelectorAll('.user-image3');
const imgs = [img1, img2, img3];

const name1 = document.querySelectorAll('.username1');
const name2 = document.querySelectorAll('.username2');
const name3 = document.querySelectorAll('.username3');
const names = [name1, name2, name3];

const city1 = document.querySelector('#city1');
const city2 = document.querySelector('#city2');
const city3 = document.querySelector('#city3');
const cities = [city1, city2, city3];

const bio1 = document.querySelector('#bio1');
const bio2 = document.querySelector('#bio2');
const bio3 = document.querySelector('#bio3');
const bios = [bio1, bio2, bio3];

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');


// HELPER FUNCTIONS

const insertUser = (n, user) => {
  imgs[n].textContent = user.image_url;
  names[n].textContent = user.name;
  cities[n].textContent = user.city;
  bios[n].textContent = user.bio;
}

function display(n, users, reverse=false) {
  const user = users[n];
  if (user) {
    insertUser(n, user);
    start = user.id + 1;
  } else {
    disableB(reverse ? prev : next);
  }
};

function getUsers(startID, size, reverse=false) {
  fetch(`users/range/${reverse ? 'reverse/' : ''}${startID}/${size}`)
  .then(res => res.json())
  .then(users => {
    // if (max <= 3) disableB(prev);
    for (let userNum = 0; userNum < size; userNum++) {
      display(userNum);
    }
    currentUsers = users;
  })
}

getMaxID = () => fetch('users/range/max').then(res => parseInt(res.json()))


// EVENT LISTENERS

next.onclick = () => {
  prev.disabled = false;
  getUsers(start, size);
}

prev.onclick = () => {
  next.disabled = false;
  getUsers(start, size, true);
}


// ACTION

let currentUsers = [];
let start = 1;
const size = 3;

// LOAD INITIAL USERS
prev.disabled = true;
getUsers(start, size);
