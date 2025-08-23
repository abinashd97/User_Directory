import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsersAsync",
  async ({ page, query }, { rejectWithValue }) => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      // JSONPlaceholder returns array directly, we need to wrap it to match expected structure
      // Also implement client-side pagination since JSONPlaceholder doesn't support pagination
      const itemsPerPage = 6;
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = data.slice(startIndex, endIndex);
      
      return {
        data: paginatedData,
        total_pages: Math.ceil(data.length / itemsPerPage),
        total: data.length,
        page: page
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
