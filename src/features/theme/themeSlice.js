import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  colors: {
    headerBackground: '#282222',
    bodyBackground: '#2F2F2F',
    text: '#5AC3DD'
  },
  darkmode: true
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state) {
      state.colors.headerBackground = state.darkmode ? '#282222' : '#CDAEB1';
      state.colors.bodyBackground = state.darkmode ? '#2F2F2F' : '#EFEFEF';
      state.colors.text = state.darkmode ? '#5AC3DD' : '#014B7B';
      state.darkmode = !state.darkmode;
    }
  }
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
