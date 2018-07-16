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

const profile1 = document.querySelector('#profile1')
const profile2 = document.querySelector('#profile2')
const profile3 = document.querySelector('#profile3')
const profileButtons = [profile1, profile2, profile3];
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');


// HELPER FUNCTIONS

function insertUser(n, user) {
  imgs[n].forEach(img => img.src = user.image_url);
  names[n].forEach(name => name.textContent = user.name);
  cities[n].textContent = user.city;
  bios[n].textContent = user.bio;
}

function clearUser(n) {
  imgs[n].forEach(img => img.src = '/vendor/freelancer/img/pusheen_default.jpg');
  names[n].forEach(name => name.textContent = '');
  cities[n].textContent = '';
  bios[n].textContent = '';
}

function display(n, users, reverse) {
  const user = users[n];
  if (reverse) {
    n = (n === 0 ? (size - 1) : n % (size - 1))
  }
  if (user) {
    insertUser(n, user);
  } else {
    clearUser(n);
    next.disabled = true;
  }
};

function getUsers(startID, size, reverse=false) {
  fetch(`users/range/${reverse ? 'reverse/' : ''}${startID}/${size}`)
  .then(res => res.json())
  .then(users => {
    if (users[2]) checkMinMax(users[2], reverse);
    if (reverse) {
      for (let userNum = size-1; userNum >= 0; userNum--) {
        display(userNum, users, reverse);
      }
    } else {
      for (let userNum = 0; userNum < size; userNum++) {
        display(userNum, users, reverse);
      }
    }
    setStarts(users);
  })
}

getMaxID = () => fetch('users/range/max').then(res => res.json())
getMinID = () => fetch('users/range/min').then(res => res.json())

const checkMaxID = (user, reverse) => {
  getMaxID()
  .then(max => {
      if (user.id === max) next.disabled = true;
    })
}

const checkMinID = user => {
  getMinID()
  .then(min => {
      if (user.id === min) prev.disabled = true;
  })
}

const checkMinMax = (user, reverse) => {
  if (reverse) {
    checkMinID(user)
  } else {
    checkMaxID(user)
  }
}

const setStarts = (users) => {
  const ids = users.filter(user => user).map(user => user.id);
  nextStart = Math.max(...ids) + 1;
  prevStart = Math.min(...ids) - 1;
}


// EVENT LISTENERS

next.onclick = () => {
  prev.disabled = false;
  getUsers(nextStart, size);
}

prev.onclick = () => {
  next.disabled = false;
  getUsers(prevStart, size, true);
}


// SET GLOBALS

let nextStart = 0;
let prevStart = 0;
const size = 3;

getMinID().then(min => nextStart = min);
const ids = users.filter(user => user).map(user => user.id);
nextStart = Math.max(...ids) + 1;
prevStart = Math.min(...ids) - 1;

// LOAD INITIAL USERS

prev.disabled = true;
getUsers(nextStart, size);
