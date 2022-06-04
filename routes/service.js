const express = require('express');
const router = express.Router();

// About Route
router.get('/', (req, res) => {
  const title = 'service';
  res.render('service', {
    title,
  });
})

module.exports = router;
