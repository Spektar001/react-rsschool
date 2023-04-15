import { configureStore } from '@reduxjs/toolkit';
import { unsplashApi } from '../store/unsplashAPI/unsplash.api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
    searchSlice: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
