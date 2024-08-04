import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, { payload }) => {
      const { username, password } = payload;
      if (username && password === "admin") {
        state.user = {
          username,
          password,
        };
        state.isAuthenticated = true;
      }
    },
  },
});

export const { loginAction } = authSlice.actions;

export default authSlice.reducer;
