import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersAsync } from "./usersThunks.jsx";

// Safe localStorage access
const getFavoritesFromStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  } catch (error) {
    console.warn("Failed to parse favorites from localStorage:", error);
    return [];
  }
};

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
    searchQuery: "",
    favorites: getFavoritesFromStorage(),
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((fav) => fav !== id);
      } else {
        state.favorites.push(id);
      }
      try {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      } catch (error) {
        console.warn("Failed to save favorites to localStorage:", error);
      }
    },
    // ...add more as needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch users";
      });
  },
});

export const { setPage, setSearchQuery, toggleFavorite } =
  usersSlice.actions;
export default usersSlice.reducer;
