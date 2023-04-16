import { configureStore } from '@reduxjs/toolkit';
import { unsplashApi } from '../store/unsplashAPI/unsplash.api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import searchReducer from './slice/searchSlice';
import formReducer from './slice/formSlice';

export const store = configureStore({
  reducer: {
    [unsplashApi.reducerPath]: unsplashApi.reducer,
    searchSlice: searchReducer,
    formSlice: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(unsplashApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
