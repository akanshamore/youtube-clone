import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  token: "",
  userId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { name, email, token, userId } = action.payload;
      state.name = name;
      state.email = email;
      state.userId = userId;
      state.token = token;
    },
    logout: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
