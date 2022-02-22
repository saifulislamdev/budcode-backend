const express = require('express');
const router = express.Router();

const createMemberRequest = require('./controllers/projects/createMemberRequest');
const followProject = require('./controllers/projects/followProject');
const getMemberRequests = require('./controllers/projects/getMemberRequests');
const getSuggestions = require('./controllers/projects/getSuggestions');
const getProject = require('./controllers/projects/getProject');
const getAllProjects = require('./controllers/projects/getAllProjects');
const getFilters = require('./controllers/projects/getFilters');
const manageMemberRequest = require('./controllers/projects/manageMemberRequest');
const updateProject = require('./controllers/projects/updateProject');
const createProject = require('./controllers/projects/createProject');

const authenticateToken = require('./middlewares/authenticateToken');
const verifyProjectCreator = require('./middlewares/verifyProjectCreator');

router.get('/', getAllProjects);
router.get('/filters', getFilters);
router.get('/suggestions', authenticateToken, getSuggestions);
router.get('/:id', getProject);
router.get(
    '/:id/requests',
    authenticateToken,
    verifyProjectCreator,
    getMemberRequests
);
router.post('/', authenticateToken, createProject);
router.post('/:id/follow', authenticateToken, followProject);
router.post('/:id/requests', authenticateToken, createMemberRequest);
router.put('/:id', authenticateToken, verifyProjectCreator, updateProject);
router.delete('/requests/:id', authenticateToken, manageMemberRequest);

module.exports = router;
