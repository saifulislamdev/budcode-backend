const express = require('express');
const router = express.Router();

const signUp = require('./controllers/auth/signUp');

router.post('/signup', signUp);

module.exports = router;
