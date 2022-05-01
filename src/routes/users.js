const express = require('express');
const router = express.Router();

const editUser = require('./controllers/users/editUser');
const getCreatedProjects = require('./controllers/users/getCreatedProjects');
const getUserInfo = require('./controllers/users/getUserInfo');

const authenticateToken = require('./middlewares/authenticateToken');

router.get('/createdProjects', authenticateToken, getCreatedProjects);
router.get('/:id', getUserInfo);
router.put('/:id', authenticateToken, editUser);

module.exports = router;
