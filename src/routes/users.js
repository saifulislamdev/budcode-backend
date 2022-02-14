const express = require('express');
const router = express.Router();

const getUserInfo = require('./controllers/users/getUserInfo');

router.get('/:id', getUserInfo);

module.exports = router;
