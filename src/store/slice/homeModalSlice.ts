import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const homeModalSlice = createSlice({
  name: 'homeModal',
  initialState: { id: '', isModalOpen: false },
  reducers: {
    setID: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setModalOpen: (state) => {
      state.isModalOpen = true;
    },
    setModalClose: (state) => {
      state.id = '';
      state.isModalOpen = false;
    },
  },
});

export const { setID, setModalOpen, setModalClose } = homeModalSlice.actions;
export default homeModalSlice.reducer;
