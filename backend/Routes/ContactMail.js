const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.REACT_APP_CONTACT_EMAIL,
      pass: process.env.REACT_APP_CONTACT_PASSWORD,
    },
  });

  router.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;
  
    try {
      await transporter.sendMail({
        from: email,
        to: process.env.REACT_APP_CONTACT_EMAIL, 
        subject: 'New Contact Form Submission',
        text: `
        Name: ${name}
        Email: ${email}  
        Phone: ${phone}
        
        Message: ${message}
      `,
      
      });
  
      res.status(200).send('Email sent successfully');
      console.log(email);
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    }
  });
  

module.exports = router;
