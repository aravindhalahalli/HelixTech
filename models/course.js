const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  course_title: {
    type: String,
    // required: true,
    minlength: 3,
    maxlength: 33,
    trim: true,
  },
  course_description: {
    type: String,
    // required: true,
    trim: true,
  },
  course_duration: {
    type: Number,
    min: 180,
    max: 360,
  },
});

module.exports = mongoose.model("courses", courseSchema);
