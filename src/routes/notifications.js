const express = require('express');
const router = express.Router();

const getNotificationsForUser = require('./controllers/notifications/getNotificationsForUser');

const authenticateToken = require('./middlewares/authenticateToken');

router.get('/user/:id', authenticateToken, getNotificationsForUser);

module.exports = router;
