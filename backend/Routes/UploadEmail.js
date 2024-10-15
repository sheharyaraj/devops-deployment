const express = require('express');
const router = express.Router();
const Email = require('../models/email');
const { body, validationResult } = require('express-validator');

router.post("/uploademail",
  body('email', 'incorrect email').isEmail(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;

    try {
      const existingEmail = await Email.findOne({ email });

      if (existingEmail) {
        return res.json({ success: false, message: 'You have already subscribed to the newsletter.' });
      }

      await Email.create({
        email: email
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  });

module.exports = router;
