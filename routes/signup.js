const express = require('express');
const router = express.Router();
const knex = require('../knex')
const bcrypt = require('bcrypt');
const path = require('path');

const signupHTML = path.join(__dirname, '..', 'public/signupform.html');

router.get('/', (req, res, next) => {
  res.sendFile(signupHTML);
})

// REGISTER a user
router.post('/', (req, res, next) => {
  console.log('/signup was hit');

  //check the email doesn't already exist in users table
  knex('users')
  .where('email', req.body.email)
  .first()
  .then((user) => {
    if(user) {
      throw new Error('Oops that email is already used')
    }

    // hash the password
    var hashed = bcrypt.hashSync(req.body.password, 8)

    // create new user record with the email + hashed password
    knex('users')
    .insert({
      name: req.body.name,
      email: req.body.email,
      hashed_password: hashed
    })
    .returning('*')
    .then((result) => {
      console.log(result)
      // res.redirect('/signin')
    })
  })
  .catch((err) => {
    // next(err)
    console.log(err, 'error')
  })
})


module.exports = router;
