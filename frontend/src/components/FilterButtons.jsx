import { useDispatch, useSelector } from "react-redux";
import { filters } from "../utils/constants";
import { setSelectedFilter } from "../redux/slices/filtersSlice";

export const FilterButtons = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.filters.selectedFilter);

  console.log(selectedFilter);
  console.log(filters);
  return (
    <div className="flex gap-5 px-6 py-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => dispatch(setSelectedFilter(filter))}
          className={`px-4 py-1 rounded-lg ${
            selectedFilter === filter
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
