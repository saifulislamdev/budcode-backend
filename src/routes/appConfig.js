const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'BudCode',
    description:
      'Backend API of collaborative platform for software developers',
  });
});

module.exports = router;
