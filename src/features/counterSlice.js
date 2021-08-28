import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogCollection: [
    {
      id: 1,
      title: "Blog Title One",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      favorite: false,
    },
    {
      id: 2,
      title: "Blog Title Two",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      favorite: false,
    },
  ],
};

export const counterSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addNewBlog: (state, action) => {
      // state.blogCollection.push(action.payload);
      return {
        ...state,
        blogCollection: [...state.blogCollection, action.payload],
      };
    },
  },
});

export const { addNewBlog } = counterSlice.actions;

export default counterSlice.reducer;
