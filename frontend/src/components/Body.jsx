import { useEffect } from "react";
import { VideoCard } from "./videoCard";
import { GET_VIDEOS_URL } from "../utils/URLs";
import { FilterButtons } from "./FilterButtons";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../redux/slices/videosSlice";

export const Body = () => {
  const videos = useSelector((state) => state.videos);
  const { searchText, selectedGenre } = useSelector((state) => state.filters);

  console.log(selectedGenre);
  const filteredVideos = videos.filter((video) => {
    const titleMatch = video.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const genreMatch = selectedGenre === "All" || video.genre === selectedGenre;
    return titleMatch && genreMatch;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(GET_VIDEOS_URL);
        const data = await response.json();
        dispatch(setVideos(data));
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
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))
        ) : (
          <div className="col-span-full text-center text-lg text-gray-600 mt-10">
            No videos found for your search criteria
          </div>
        )}
      </div>
    </div>
  );
};
