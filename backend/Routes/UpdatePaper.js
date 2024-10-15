const express = require('express');
const router = express.Router();
const multer = require('multer');
const Paper = require('../models/paper');
const File = require('../models/paper1')
const path = require('path');
const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  name: String,
});

const University = mongoose.model("university", universitySchema);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      const originalName = file.originalname; // Use the original filename
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extension = path.extname(originalName); // Use the original file extension
      cb(null, path.basename(originalName, extension) + "-" + uniqueSuffix + extension);
    },
  });
  const upload = multer({ storage });

  router.put('/updatepaper/:id', upload.array('images', 5), async (req, res) => {
    const paperId = req.params.id;
  
    try {
      let paper = await File.findById(paperId);
      if (!paper) {
        return res.status(404).json({ success: false, message: 'Paper not found' });
      }

      let university = await University.findOne({ name: req.body.universityName });

    // If the university doesn't exist, create a new entry
    if (!university) {
      university = new University({ name: req.body.universityName });
      await university.save();
    }
  
      paper.universityName = req.body.universityName;
      paper.paperYear = req.body.paperYear;
      paper.courseName = req.body.courseName;
      paper.paperType = req.body.paperType;
      
      // Update paper.images with the paths of the uploaded images
      paper.images = req.files.map((file) => file.path);
  
      console.log('Updated paper data:', paper);
      await paper.save();
  
      res.status(200).json({ success: true, message: 'Paper updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to update paper' });
    }
  });
  
  
  module.exports = router;
  
  