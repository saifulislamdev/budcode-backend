const express = require('express');
const router = express.Router();

const followProject = require('./controllers/projects/followProject');
const getProject = require('./controllers/projects/getProject');
const updateProject = require('./controllers/projects/updateProject');

const authenticateToken = require('./middlewares/authenticateToken');

router.get('/:id', getProject);
router.post('/:id/follow', authenticateToken, followProject);
router.put('/:id', authenticateToken, updateProject);

module.exports = router;
