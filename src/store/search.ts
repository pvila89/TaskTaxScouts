import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './configureStore';

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    }

  },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;

export const selectQuery = (state: RootState) => state.search.query;
