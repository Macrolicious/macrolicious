const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({message: 'Hitting API endpoint'});
});

module.exports = router; 