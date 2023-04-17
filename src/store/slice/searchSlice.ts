import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
  searchInputvalue: string;
}

const initialState: SearchState = {
  value: 'los angeles',
  searchInputvalue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    value(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    inputChange: (state, action: PayloadAction<string>) => {
      state.searchInputvalue = action.payload;
    },
  },
});

export const { value, inputChange } = searchSlice.actions;
export default searchSlice.reducer;
