const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");

const router = express.Router();

const fileSchema = new mongoose.Schema({
  universityName: String,
  paperYear: String,
  courseName: String,
  paperType: String,
  images: [String],
});

const universitySchema = new mongoose.Schema({
  name: String,
});

const University = mongoose.model("University", universitySchema);
const File = mongoose.model("File", fileSchema);

// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const originalName = file.originalname;
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(originalName);
    cb(null, path.basename(originalName, extension) + "-" + uniqueSuffix + extension);
  },
});

const upload = multer({ storage });

// POST route to handle file upload
router.post("/upload", upload.array("images", 10), async (req, res) => {
  try {
    const { universityName, paperYear, courseName, paperType } = req.body;

    // Check if the university name already exists in the University collection
    let university = await University.findOne({ name: universityName });

    // If the university doesn't exist, create a new entry
    if (!university) {
      university = new University({ name: universityName });
      await university.save();
    }

    const images = req.files.map((file) => file.path);

    const newFile = new File({
      universityName, // Store university name in the File collection
      university: university._id, // Reference to the University ObjectId
      universityName,
      paperYear,
      courseName,
      paperType,
      images,
    });

    await newFile.save();

    res.status(201).json({ message: "File uploaded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.get('/get-course-details', async (req, res) => {
  try {
    const courses = await File.find({}); // Fetch all fields from documents
    console.log(courses);
    res.status(200).json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/get-university-details', async (req, res) => {
  try {
    const uni = await University.find({}); // Fetch all fields from documents
    console.log(uni);
    res.status(200).json(uni);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
