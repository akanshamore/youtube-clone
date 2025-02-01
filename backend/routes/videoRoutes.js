const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getVideos,
  uploadVideo,
  getVideoById,
  updateViews,
  updateLikes,
  updateDislikes,
} = require("../controllers/videoController");

// Public routes
router.get("/", getVideos);
router.get("/:id", getVideoById);
router.patch("/:id/views", updateViews);

// Protected routes
router.post("/upload", authMiddleware, uploadVideo);
router.patch("/:id/likes", authMiddleware, updateLikes);
router.patch("/:id/dislikes", authMiddleware, updateDislikes);

module.exports = router;
