const express = require('express');
const router = express.Router();
const authenticateToken = require('./middlewares/authenticateToken');

const createRating = require('./controllers/ratings/createRating');

router.post('/', authenticateToken, createRating);

module.exports = router;
