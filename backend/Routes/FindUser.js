const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import your User model

router.get('/getuserdata/:email', async (req, res) => {
  const userEmail = req.params.email;

  try {
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to fetch user data' });
  }
});

module.exports = router;
