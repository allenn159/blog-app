import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogCollection: [
    {
      id: 1,
      title: "Blog Title One",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      favorite: false,
    },
    {
      id: 2,
      title: "Blog Title Two",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      favorite: false,
    },
    {
      id: 3,
      title: "Blog Title Three",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      favorite: false,
    },
    {
      id: 4,
      title: "Blog Title Four",
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
    deleteBlog: (state, action) => {
      return {
        ...state,
        blogCollection: state.blogCollection.filter(
          (blog) => blog.id !== action.payload
        ),
      };
    },
    toggleFavorite: (state, action) => {
      return {
        ...state,
        blogCollection: state.blogCollection.map((blog) => {
          if (blog.id !== action.payload) {
            return {
              ...blog,
            };
          }
          return {
            ...blog,
            favorite: !blog.favorite,
          };
        }),
      };
    },
  },
});

export const { addNewBlog, deleteBlog, toggleFavorite } = counterSlice.actions;

export default counterSlice.reducer;
