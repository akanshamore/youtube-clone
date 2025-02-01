import { useDispatch, useSelector } from "react-redux";
import { genres } from "../utils/constants";
import { setSelectedGenre } from "../redux/slices/filtersSlice";

export const FilterButtons = () => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state) => state.filters.selectedGenre);

  return (
    <div className="flex gap-5 px-6 py-3">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => dispatch(setSelectedGenre(genre))}
          className={`px-4 py-1 rounded-lg ${
            selectedGenre === genre
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};
