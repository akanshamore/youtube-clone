import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  GET_COMMENTS_URL,
  GET_VIDEO_BY_ID_URL,
  GET_VIDEOS_URL,
} from "../utils/URLs";
import { useSelector } from "react-redux";

export const VideoPlayer = () => {
  const auth = useSelector((state) => state.auth);
  console.log("auth is", auth);
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideoDetails();
    fetchComments();
    fetchRecommendedVideos();
  }, [videoId]);

  useEffect(() => {
    if (video) {
      updateViews();
    }
  }, [video]);

  console.log("video is", video);

  const updateViews = async () => {
    try {
      const response = await fetch(`${GET_VIDEO_BY_ID_URL}/${videoId}/views`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ views: video.views + 1 }),
      });
      if (response.ok) {
        console.log("Views updated successfully");
      } else {
        console.log("Failed to update views");
      }
    } catch (error) {
      console.log("Error updating views:", error);
    }
  };

  const fetchVideoDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${GET_VIDEO_BY_ID_URL}/${videoId}`);
      if (!response.ok) throw new Error("Failed to fetch video details");
      const data = await response.json();
      setVideo(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(`${GET_COMMENTS_URL}/${videoId}`);
      const data = await response.json();
      setComments(data.data);
    } catch (error) {
      console.log("Error fetching comments:", error);
    }
  };

  const fetchRecommendedVideos = async () => {
    try {
      const response = await fetch(GET_VIDEOS_URL);
      const data = await response.json();
      // Filter out the current video from recommendations
      const filteredVideos = data.filter((video) => video._id !== videoId);
      setRecommendedVideos(filteredVideos);
    } catch (error) {
      console.log("Error fetching recommended videos:", error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch(`${GET_VIDEO_BY_ID_URL}/${videoId}/likes`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: video.likes + 1 }),
      });
      if (response.ok) {
        console.log("Likes updated successfully");
        setLikes((prev) => prev + 1);
      } else {
        console.log("Failed to update likes");
      }
    } catch (error) {
      console.log("Error updating views:", error);
    }
  };

  const handleDislike = () => {
    setDislikes((prev) => prev + 1);
  };

  if (!video) return <div className="text-center p-4">Loading...</div>;

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-600">{error}</div>;

  return (
    <div className="bg-[#f9f9f9] p-5">
      <div className="max-w-[1800px] mx-auto flex gap-6">
        <div className="flex-1 max-w-[70%]">
          <div className="mb-5">
            <video controls className="w-full rounded-xl">
              <source src={video.videoUrl} type="video/mp4" />
            </video>
          </div>

          <div className="bg-white p-5 rounded-xl mb-5">
            <h1 className="text-xl font-bold mb-4">{video.title}</h1>

            <div className="flex justify-between items-center py-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img
                  src={video.channelId.avatarUrl}
                  alt={video.channelId.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">{video.channelId.name}</h3>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">
                    Subscribe
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleLike}
                  disabled={!auth?.email}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <span>👍</span> {likes}
                </button>
                <button
                  onClick={handleDislike}
                  disabled={!auth?.email}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
                >
                  <span>👎</span> {dislikes}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  Save
                </button>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p>{video.description}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl">
            <h3 className="text-lg font-bold mb-4">Comments</h3>
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                placeholder="Add a comment..."
                disabled={!auth?.email}
                className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                disabled={!auth?.email}
              >
                Comment
              </button>
            </div>
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3 mb-4">
                <img
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-medium">{comment.user.name}</h4>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[30%] bg-white p-5 rounded-xl h-fit">
          <h3 className="font-bold mb-4">Recommended Videos</h3>
          {recommendedVideos.map((recommendedVideo) => (
            <Link
              to={`/watch/${recommendedVideo._id}`}
              key={recommendedVideo._id}
              className="flex gap-2 mb-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
            >
              <img
                src={recommendedVideo.thumbnail}
                alt={recommendedVideo.title}
                className="w-42 h-24 rounded-lg object-cover"
              />
              <div>
                <h4 className="font-medium text-sm">
                  {recommendedVideo.title}
                </h4>
                <p className="text-gray-600 text-xs">
                  {recommendedVideo.channelId.name}
                </p>
                <p className="text-gray-600 text-xs">
                  {recommendedVideo.views} views
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
