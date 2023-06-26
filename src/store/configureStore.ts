import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import searchReducer from './search';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    search: searchReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;