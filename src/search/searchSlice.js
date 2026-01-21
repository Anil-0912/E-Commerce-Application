import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    category: "all",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    clearFilters: (state) => {
      state.query = "";
      state.category = "all";
    },
  },
});

export const { setQuery, setCategory, clearFilters } = searchSlice.actions;
export default searchSlice.reducer;
