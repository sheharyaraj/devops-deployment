const express = require('express');
const router = express.Router();
const File = require("../models/paper");

router.get("/checkRecord", async (req, res) => {
    const { universityName, paperYear, courseName, paperType } = req.query;
  
    try {
      const existingRecord = await File.findOne({
        universityName,
        paperYear,
        courseName,
        paperType,
      });
  
      if (existingRecord) {
        res.json({ exists: true });
      } else {
        res.json({ exists: false });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });

module.exports = router;
