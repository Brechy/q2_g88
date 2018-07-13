const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

const profileHTML = path.join(__dirname, '..', 'public/profile.html');
const myProfileHTML = path.join(__dirname, '..', 'public/myprofile.html');

router.get('/view/:userid', (req, res, next) => {
	res.sendFile(profileHTML);
});

// this route is giving me my profile
router.get('/', (req, res, next) => {
	res.sendFile(myProfileHTML)
  // USE KNEX TO GET ALL USERS
  // knex('users')
	// .where('id',myId)
  // .then((data) => {
  //   console.log('data....', data)
  //   res.json(data)
  // })

})
//this route is for getting one user.
router.get('/api/:userid', (req, res, next) => {
  // USE KNEX TO GET A SPECIFIC USER
  knex('users')
  .where('id', req.params.id)
  .then((data) => {
    console.log('the specific user', data)
    res.json(data)
  })
})


module.exports = router;
