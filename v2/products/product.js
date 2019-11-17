const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/authentication');

router.get('/products', auth, (req, res, next) => {
  res.status(200).json({message: 'Hello there'});
});

module.exports = router;