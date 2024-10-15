const express = require('express');
const router = express.Router();
const Review = require('../models/review');

router.post('/reviews', async (req, res) => {
  try {
    const { name, university, message } = req.body;

    const newReview = new Review({
      name,
      university,
      message,
    });

    await newReview.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;
