const express = require('express');
const router = express.Router();
const Review = require('../models/review');


router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json({ success: true, reviews });
  } catch (error) {
    console.error(error);
    res.json({ success: false, error: 'Failed to fetch reviews' });
  }
});

module.exports = router;
