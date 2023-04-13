import { configureStore } from '@reduxjs/toolkit';
import { unsplashApi } from '../store/unsplashAPI/unsplash.api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

setupListeners(store.dispatch);
