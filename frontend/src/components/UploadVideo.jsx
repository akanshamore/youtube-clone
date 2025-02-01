import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { CREATE_CHANNEL_URL, GET_USER_CHANNELS_URL } from "../utils/URLs";

function UploadVideo() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState("select-channel");
  const [channels, setChannels] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const auth = useSelector((state) => state.auth);

  const [channelData, setChannelData] = useState({
    name: "",
    avatarUrl: "",
  });

  const [videoData, setVideoData] = useState({
    title: "",
    thumbnail: "",
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    if (auth.token) {
      fetchUserChannels();
    }
  }, [auth.token]);

  const fetchUserChannels = async () => {
    try {
      const response = await fetch(GET_USER_CHANNELS_URL, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const data = await response.json();
      setChannels(data);
    } catch (error) {
      console.error("Error fetching channels:", error);
    }
  };

  const handleChannelInputChange = (e) => {
    setChannelData({
      ...channelData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVideoInputChange = (e) => {
    setVideoData({
      ...videoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateChannel = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(CREATE_CHANNEL_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(channelData),
      });
      const newChannel = await response.json();
      setChannels([...channels, newChannel]);
      setSelectedChannel(newChannel);
      setStep("upload-video");
    } catch (error) {
      console.error("Error creating channel:", error);
    }
  };

  const handleUploadVideo = async (e) => {
    e.preventDefault();
    try {
      const videoPayload = {
        ...videoData,
        channelId: selectedChannel._id,
      };

      await fetch("/api/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify(videoPayload),
      });

      setShowModal(false);
      setStep("select-channel");
      setVideoData({
        title: "",
        thumbnail: "",
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const renderChannelSelection = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Select Channel</h2>
      {channels.map((channel) => (
        <div
          key={channel._id}
          onClick={() => setSelectedChannel(channel)}
          className={`p-4 border rounded cursor-pointer hover:border-blue-500 ${
            selectedChannel?._id === channel._id
              ? "border-blue-500 bg-blue-50"
              : ""
          }`}
        >
          <div className="flex items-center space-x-3">
            <img
              src={channel.avatarUrl}
              alt={channel.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-medium">{channel.name}</span>
          </div>
        </div>
      ))}
      <button
        className="w-full p-4 border-2 border-dashed rounded hover:bg-gray-50"
        onClick={() => setStep("create-channel")}
      >
        Create New Channel
      </button>
      {selectedChannel && (
        <button
          onClick={() => setStep("upload-video")}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Continue with Selected Channel
        </button>
      )}
    </div>
  );

  const renderChannelCreation = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create New Channel</h2>
      <form onSubmit={handleCreateChannel} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Channel Name
          </label>
          <input
            type="text"
            name="name"
            value={channelData.name}
            onChange={handleChannelInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Channel Avatar URL
          </label>
          <input
            type="url"
            name="avatarUrl"
            value={channelData.avatarUrl}
            onChange={handleChannelInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex space-x-3">
          <button
            type="button"
            onClick={() => setStep("select-channel")}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Create Channel
          </button>
        </div>
      </form>
    </div>
  );

  const renderVideoUpload = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
      <div className="mb-4 flex items-center space-x-3">
        <img
          src={selectedChannel.avatarUrl}
          alt={selectedChannel.name}
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium">{selectedChannel.name}</span>
      </div>
      <form onSubmit={handleUploadVideo} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Video Title
          </label>
          <input
            type="text"
            name="title"
            value={videoData.title}
            onChange={handleVideoInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Thumbnail URL
          </label>
          <input
            type="url"
            name="thumbnail"
            value={videoData.thumbnail}
            onChange={handleVideoInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex space-x-3">
          <button
            type="button"
            onClick={() => setStep("select-channel")}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Upload Video
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
      >
        <FontAwesomeIcon icon={faVideo} />
        <span>Upload Video</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => {
                setShowModal(false);
                setStep("select-channel");
                setSelectedChannel(null);
              }}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full"
            >
              ✕
            </button>
            {step === "select-channel" && renderChannelSelection()}
            {step === "create-channel" && renderChannelCreation()}
            {step === "upload-video" && renderVideoUpload()}
          </div>
        </div>
      )}
    </>
  );
}

export default UploadVideo;
