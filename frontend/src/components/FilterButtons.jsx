import { filters } from "../utils/constants";

export const FilterButtons = () => {
  return (
    <div className="flex gap-5 px-6 py-3">
      {filters.map((filter) => (
        <button
          key={filter}
          className="bg-[#0F0F0F] text-white px-3 py-2 rounded-lg border border-[rgba(255,255,255,0.1)] text-sm font-medium whitespace-nowrap hover:bg-[#272727] transition-colors"
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
