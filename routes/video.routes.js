const express = require("express");
const router = express.Router();
const {
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/video.controller");
const { verifyToken, isAdmin } = require("../middlewares/auth.middleware");

// Public Routes
router.get("/", getAllVideos);
router.get("/:id", getVideoById);

// Admin Restricted Routes
router.post("/", verifyToken, isAdmin, createVideo);
router.put("/:id", verifyToken, isAdmin, updateVideo);
router.delete("/:id", verifyToken, isAdmin, deleteVideo);

module.exports = router;
