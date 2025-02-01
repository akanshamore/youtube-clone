const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const {
  createChannel,
  getUserChannels,
  getChannelById,
  updateChannel,
  deleteChannel,
} = require("../controllers/channelController");

router.post("/", protect, createChannel);
router.get("/user", protect, getUserChannels);
router.get("/:id", getChannelById);
router.put("/:id", protect, updateChannel);
router.delete("/:id", protect, deleteChannel);

module.exports = router;
