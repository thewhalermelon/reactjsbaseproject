import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../features/theme/themeSlice';
import { portfolioSlice } from '../features/api/portfolioSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    [portfolioSlice.reducerPath]: portfolioSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(portfolioSlice.middleware)
});

export default store;
