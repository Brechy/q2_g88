const express = require('express');
const router = express.Router();
const path = require('path');

const userBio = path.join(__dirname, '..', 'public/user_bio.html');
// get to the route signup2
router.get('/', (req, res, next) => {
  res.sendFile(userBio);
});

//add the user-bio to the // DB
router.post('/',(req, res, next) => {

})
module.exports = router;
