const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

const userBio = path.join(__dirname, '..', 'public/user_bio.html');
// get to the route signup2
router.get('/', (req, res, next) => {
  res.sendFile(userBio);
});

//add the user-bio to the // DB
router.post('/',(req, res, next) => {


knex('users')
.where('users.bio', req.body.bio)
.first()
.insert({
  bio: req.body.bio,
  city: req.body.city,
  facebook: req.body.facebook,
  instagram: req.body.instagram
})
.returning('*')
.then((result) =>{
  res.redirect('/signup3')
});
});

module.exports = router;
