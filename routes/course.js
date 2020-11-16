const express = require("express");
const router = express.Router();

// Courses model
const Courses = require("../models/course");

router.get("/", async (req, res) => {
  try {
    const courses = await Courses.find({});
    res.send({ courses });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});


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

router.put("/:id", async (req, res) => {
  try {
    const updatedCourse = await Courses.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({ message: "The course was updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removeCourse = await Courses.findByIdAndRemove(req.params.id);
    res.send({ message: "The course was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
