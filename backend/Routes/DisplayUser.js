const express = require('express');
const router = express.Router();
const user =require('../models/user');

router.get('/users', async (req, res) => {
    try {
      const users = await user.find({}, 'id name email').limit(5); 
      res.json(users);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  
module.exports = router;