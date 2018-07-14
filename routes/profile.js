const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

const profileHTML = path.join(__dirname, '..', 'public/profile.html');
const myProfileHTML = path.join(__dirname, '..', 'public/myprofile.html');

router.get('/', (req, res, next) => {
	res.sendFile(profileHTML);
});

router.get('/:userid', (req, res, next) => {
	res.sendFile(profileHTML);
});


// // this route is giving me my profile
// router.get('/', (req, res, next) => {
// 	res.sendFile(myProfileHTML)
// })

//this route is for getting one user as JSON.
router.get('/api/:userid', (req, res, next) => {
  // USE KNEX TO GET A SPECIFIC USER
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.json(data)
  })
})



module.exports = router;
