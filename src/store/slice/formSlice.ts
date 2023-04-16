import { createSlice } from '@reduxjs/toolkit';

interface FormInputs {
  date: string;
  category: string;
  image: string | false;
  title: string;
  norobot: boolean;
  sale: string;
  price: string;
}

interface FormState {
  form: FormInputs[];
  isOpen: boolean;
}

const initialState: FormState = {
  form: [],
  isOpen: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard(state, action) {
      state.form.push({
        date: action.payload.date,
        category: action.payload.category,
        image: URL.createObjectURL(action.payload.image[0]),
        title: action.payload.title,
        norobot: action.payload.norobot,
        sale: action.payload.sale,
        price: action.payload.price,
      });
    },
    setModalOpen: (state) => {
      state.isOpen = true;
    },
    setModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addCard, setModalOpen, setModalClose } = formSlice.actions;
export default formSlice.reducer;
