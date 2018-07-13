const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

const profiltHTML = path.join(__dirname, '..', 'public/profile.html');

router.get('/', (req, res, next) => {
	res.sendFile(profiltHTML);
});

// this route is giving me all the users
router.get('/', (req, res, next) => {
  // USE KNEX TO GET ALL USERS
  knex('users')
  .then((data) => {
    console.log('data....', data)
    res.json(data)
  })
})
//this route is for getting one user.
router.get('/:userid', (req, res, next) => {
  // USE KNEX TO GET A SPECIFIC USER
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.json(data)
  })
})


module.exports = router;
