const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth.middleware");
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.controller");

// Public Routes
router.get("/", getAllCourses);
router.get("/:id", getCourseById);

// Admin Restricted Routes
router.post("/", verifyToken, isAdmin, createCourse);
router.put("/:id", verifyToken, isAdmin, updateCourse);
router.delete("/:id", verifyToken, isAdmin, deleteCourse);

module.exports = router;
