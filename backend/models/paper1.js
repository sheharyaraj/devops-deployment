const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  universityName: String,
  paperYear: String,
  courseName: String,
  paperType: String,
  images: [String],
});
module.exports = mongoose.model('Files', fileSchema);