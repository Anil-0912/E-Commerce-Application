import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
    setDark: (state) => {
      state.dark = true;
    },
    setLight: (state) => {
      state.dark = false;
    },
  },
});

export const { toggleTheme, setDark, setLight } = themeSlice.actions;
export default themeSlice.reducer;
