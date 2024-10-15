const express = require('express');
const router = express.Router();
const user =require('../models/user');

router.get("/usersCount", async (req, res) => {
    try {
      const userCount = await user.countDocuments();
      res.json({ userCount });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  
module.exports = router;