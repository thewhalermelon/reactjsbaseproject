import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkmode: true
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      state.darkmode = !state.darkmode;
    }
  }
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
