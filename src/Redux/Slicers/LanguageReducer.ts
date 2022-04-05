import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
  isAuto: false,
};
const LanguageSlice = createSlice({
  name: 'language',
  initialState: initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },

    setIsAuto: (state, action: PayloadAction<boolean>) => {
      state.isAuto = action.payload;
    },
  },
});

export const {setLanguage, setIsAuto} = LanguageSlice.actions;
export default LanguageSlice.reducer;
