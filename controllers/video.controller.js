const Video = require("../models/video.model");

// Public Actions
exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin Actions
exports.createVideo = async (req, res) => {
  try {
    const newVideo = new Video(req.body);
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateVideo = async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedVideo)
      return res.status(404).json({ message: "Video not found" });
    res.status(200).json(updatedVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo)
      return res.status(404).json({ message: "Video not found" });
    res.status(200).json({ message: "Video post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
