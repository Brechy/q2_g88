const express = require('express');
const router = express.Router();
const path = require('path');
const knex = require('../knex')

const userBio = path.join(__dirname, '..', 'public/user_bio.html');
// get to the route signup2
router.get('/', (req, res, next) => {
  res.sendFile(userBio);
});

router.get('/:user', (req, res) => {
  const email = req.params.user;
  knex('users')
  .where('email', email)
  .returning('*')
  .first()
  .then((result) => {
    let response = {
      'result': 'failed',
      'message': 'unknown error'
    };
    if (!result) {
      res.statusCode = 404;
      response.result = 'failed';
      response.message = 'record not found';
      response.aux = JSON.stringify(result);
    } else {
      res.statusCode = 200;
      response.result = 'ok';
      response.message = 'found';
      response.bio = result.bio
      response.city = result.city
      response.facebook = result.facebook
      response.instagram = result.instagram
    }
    res.send(JSON.stringify(response));
  })
  .catch((err) => {
    console.log(err);
    res.statusCode = 500;
    const response = {
      'result': 'failed',
      'message': JSON.stringify(err)
    };
    res.send(JSON.stringify(response));
  });
});

//add the user-bio to the // DB
router.put('/:user',(req, res, next) => {
  const email = req.params.user;
  console.log(JSON.stringify(req.body));
  knex('users')
  .where('users.email', email)
  .update({
    bio: req.body.bio,
    city: req.body.city,
    facebook: req.body.facebook,
    instagram: req.body.instagram
  })
  .returning('*')
  .then((result) => {
    res.statusCode = 200;
    const response = {
      'result': 'ok',
      'message': 'updated'
    }
    res.send(JSON.stringify(response));
    
  })
  .catch((err) => {
    console.log(err);
    res.statusCode = 500;
    const response = {
      'result': 'failed',
      'message': JSON.stringify(err)
    }
    res.send(JSON.stringify(response));
  })
});

module.exports = router;
