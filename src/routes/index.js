const express = require('express');
const router = express.Router();

// Load each controller
const appConfig = require('./appConfig');
const auth = require('./auth');
const notifications = require('./notifications');
const projects = require('./projects');
const users = require('./users');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/', appConfig);
router.use('/auth', auth);
router.use('/notifications', notifications);
router.use('/projects', projects);
router.use('/users', users);

module.exports = router;
