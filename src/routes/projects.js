const express = require('express');
const router = express.Router();

const getProject = require('./controllers/projects/getProject');

router.get('/:id', getProject);

module.exports = router;
