const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getVideos,
  uploadVideo,
  getVideoById,
  updateViews,
} = require("../controllers/videoController");

// Public routes
router.get("/", getVideos);
router.get("/:id", getVideoById);
router.patch("/:id/views", updateViews);

// Protected routes
router.post("/upload", authMiddleware, uploadVideo);

module.exports = router;
