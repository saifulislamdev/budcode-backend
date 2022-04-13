const express = require('express');
const router = express.Router();

const getUpdates = require('./controllers/updates/getUpdates');
const authenticateToken = require('./middlewares/authenticateToken');

router.get('/', authenticateToken, getUpdates);

module.exports = router;