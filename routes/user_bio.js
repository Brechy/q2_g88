const express = require('express');
const router = express.Router();
const path = require('path');

const userBio = path.join(__dirname, '..', 'public/user_bio.html');

router.get('/', (req, res, next) => {
  res.sendFile(userBio);
});


module.exports = router;
