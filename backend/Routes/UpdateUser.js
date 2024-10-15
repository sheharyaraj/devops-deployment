const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // for password hashing
const User = require('../models/user'); // Adjust the path to your User model

// ...

router.put('/updateuser/:id', async (req, res) => {
  const userId = req.params.id;
  
  try {
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Update the user data
    user.name = req.body.name ; // If no username provided, keep the old one
    user.email = req.body.email ; // If no email provided, keep the old one

    if (req.body.password) {
      // Hash and update the password if provided
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword;
    }
    // Save the updated user data
    await user.save();

    res.status(200).json({ success: true, message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to update user' });
  }
});

module.exports = router;
