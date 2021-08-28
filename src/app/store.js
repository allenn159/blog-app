import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});
