import { configureStore } from '@reduxjs/toolkit';
import { unsplashApi } from '../store/unsplashAPI/unsplash.api';

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});
