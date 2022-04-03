import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isDarkTheme: false,
  isAutoTheme: false,
};
const ThemeingSlice = createSlice({
  name: 'themingMode',
  initialState: initialState,
  reducers: {
    setIsDarkModeTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkTheme = action.payload;
    },
    setAutoTheme: (state, action: PayloadAction<boolean>) => {
      state.isAutoTheme = action.payload;
    },
  },
});

export const {setIsDarkModeTheme, setAutoTheme} = ThemeingSlice.actions;
export default ThemeingSlice.reducer;
