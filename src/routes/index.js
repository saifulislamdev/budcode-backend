const express = require('express');
const router = express.Router();

// Load each controller
const appConfig = require('./appConfig');
const auth = require('./auth');
const projects = require('./projects');
const ratings = require('./ratings')
const users = require('./users');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/', appConfig);
router.use('/auth', auth);
router.use('/projects', projects);
router.use('/ratings', ratings);
router.use('/users', users);

module.exports = router;
