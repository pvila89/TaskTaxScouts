import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './configureStore';
import Book from '../entities/Book';
import { fetchBooks } from '../services/booksApi';

interface BooksState {
  books: Book[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BooksState = {
  books: [],
  status: 'idle',
};

export const getBooksAsync = createAsyncThunk(
  'books/fetchBooks',
  async (query: string) => {
    if(query === "" || query === undefined) return [];
    return await fetchBooks(query);
  }
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksAsync.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.status = 'idle';
        state.books = action.payload;
      })
      .addCase(getBooksAsync.rejected, (state) => {
        state.status = 'failed';
        state.books = [];
      });
  },
});

export default booksSlice.reducer;

export const selectBooks = (state: RootState) => state.books.books;
export const selectBooksStatus = (state: RootState) => state.books.status;
