const express = require('express');
const router = express.Router();
const path = require('path');

const membersPage = path.join(__dirname, '..', 'public/members.html')

router.get('/', (req, res) => res.sendFile(membersPage))

module.exports = router;
