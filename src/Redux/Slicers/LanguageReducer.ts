import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
};
const LanguageSlice = createSlice({
  name: 'language',
  initialState: initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const {setLanguage} = LanguageSlice.actions;
export default LanguageSlice.reducer;
