const express = require("express");
const router = express.Router();

// Courses model
// const Students = require('../models/students');
const Courses = require("../models/course");

// @route   GET /api/students/
// @desc    Get all students
// @access  Public
router.get("/", async (req, res) => {
  try {
    const courses = await Courses.find({});
    res.send({ courses });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});


// @route   POST /api/students/
// @desc    Create a student
// @access  Public
router.post("/", async (req, res) => {
  try {
    const newCourse = await Courses.create({
      course_title: req.body.course_title,
      course_description: req.body.course_description,
      course_duration: req.body.course_duration,
    });
    res.send({ newCourse });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   PUT /api/students/:id
// @desc    Update a student
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({ message: "The student was updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/students/:id
// @desc    Delete a student
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const removeStudent = await Students.findByIdAndRemove(req.params.id);
    res.send({ message: "The student was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
