import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NewItemTileModel, NewsDataResponse} from '../../Types';

const initialState: NewsDataResponse = {
  data: [],
};

const NewsListSlice = createSlice({
  name: 'newsList',
  initialState: initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewItemTileModel[]>) => {
      state.data = action.payload;
    },
  },
});

export const {setNews} = NewsListSlice.actions;
export default NewsListSlice.reducer;
