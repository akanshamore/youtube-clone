const Video = require("../models/Video");
const Channel = require("../models/Channel");

// Get all videos
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate("channelId");
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upload new video
const uploadVideo = async (req, res) => {
  try {
    const { title, thumbnail, videoUrl, channelId, description, genre } =
      req.body;

    if (
      !title ||
      !thumbnail ||
      !videoUrl ||
      !channelId ||
      !description ||
      !genre
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Verify if channel exists
    const channelExists = await Channel.findById(channelId);
    if (!channelExists) {
      return res.status(404).json({ message: "Channel not found" });
    }

    const video = new Video({
      title,
      thumbnail,
      videoUrl,
      channelId,
      description,
      genre,
      views: "0", // Default value
    });

    await video.save();
    res.status(201).json({
      message: "Video uploaded successfully",
      video: video,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get video by ID
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate("channelId");
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update video views
const updateViews = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const currentViews = video.views;
    video.views = currentViews + 1;

    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update video likes
const updateLikes = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const currentLikes = video.likes;
    video.likes = currentLikes + 1;

    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update video dislikes
const updateDislikes = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    const currentDislikes = video.dislikes;
    video.dislikes = currentDislikes + 1;

    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get videos by channelId
const getVideosByChannelId = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.json(videos);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching videos",
      error: error.message,
    });
  }
};

module.exports = {
  getVideos,
  uploadVideo,
  getVideoById,
  updateViews,
  updateLikes,
  updateDislikes,
  getVideosByChannelId,
};
