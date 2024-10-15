const express = require("express");
const router = express.Router();

const file = require('../models/paper');


router.get("/papersCount", async (req, res) => {
    try {
      console.log("Fetching paper count...");
      const paperCount = await file.countDocuments();
      console.log("Fetched paper count:", paperCount);
      res.json({ paperCount });
    } catch (err) {
      console.error("Error fetching paper count:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
router.get("/coursesCount", async (req, res) => {
  try {
    const distinctCourses = await file.aggregate([
      { $group: { _id: "$courseName" } },
      { $group: { _id: null, count: { $sum: 1 } } },
    ]);

    const courseCount = distinctCourses.length > 0 ? distinctCourses[0].count : 0;

    res.json({ courseCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
