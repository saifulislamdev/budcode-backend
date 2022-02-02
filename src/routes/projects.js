const express = require('express');
const router = express.Router();

const followProject = require('./controllers/projects/followProject');
const getProject = require('./controllers/projects/getProject');

const authenticateToken = require('./middlewares/authenticateToken');

router.get('/:id', getProject);
router.post('/:id/follow', authenticateToken, followProject);

module.exports = router;
