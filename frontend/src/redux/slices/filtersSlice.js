import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
  selectedFilter: "All",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    clearFilters: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setSearchText, setSelectedFilter, clearFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
