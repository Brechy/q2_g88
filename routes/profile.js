const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

const profiltHTML = path.join(__dirname, '..', 'public/profile.html');

router.get('/', (req, res, next) => {
	res.sendFile(profiltHTML);
});

router.get('/', (req, res, next) => {
  // USE KNEX TO GET A SPECIFIC USER

  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.send(data)
  })
})


module.exports = router;
