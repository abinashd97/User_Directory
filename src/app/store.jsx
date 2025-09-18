// store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../theme/themeSlice.jsx";
import usersReducer from "../features/usersSlice.jsx";

export const store = configureStore({
  reducer: {
    users: usersReducer, // Handles user-related state
    theme: themeReducer, // Handles UI theme state
  },
});
