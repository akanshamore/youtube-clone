import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import filtersReducer from "./slices/filtersSlice";
import videosReducer from "./slices/videosSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filters: filtersReducer,
    videos: videosReducer,
  },
});
