import { useEffect, useState } from "react";
import { VideoCard } from "./videoCard";
import { GET_VIDEOS_URL } from "../utils/URLs";
import { FilterButtons } from "./FilterButtons";

export const Body = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(GET_VIDEOS_URL);
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <FilterButtons />
      <div className="flex-1 p-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 overflow-y-auto">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};
