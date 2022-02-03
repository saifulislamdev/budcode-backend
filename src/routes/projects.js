const express = require('express');
const router = express.Router();

const followProject = require('./controllers/projects/followProject');
const getMemberRequests = require('./controllers/projects/getMemberRequests');
const getProject = require('./controllers/projects/getProject');
const updateProject = require('./controllers/projects/updateProject');

const authenticateToken = require('./middlewares/authenticateToken');
const verifyProjectCreator = require('./middlewares/verifyProjectCreator');

router.get('/:id', getProject);
router.get(
    '/:id/requests',
    authenticateToken,
    verifyProjectCreator,
    getMemberRequests
);
router.post('/:id/follow', authenticateToken, followProject);
router.put('/:id', authenticateToken, verifyProjectCreator, updateProject);

module.exports = router;
