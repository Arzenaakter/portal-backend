const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    caption: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Course", courseSchema);
