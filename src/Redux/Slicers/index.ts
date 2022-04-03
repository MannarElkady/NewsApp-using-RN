import {combineReducers} from '@reduxjs/toolkit';
import NewsListReducer from './NewsListReducer';
import ThemingReducer from './ThemingReducer';

const rootReducer = combineReducers({
  newsFeedReducer: NewsListReducer,
  themingReducer: ThemingReducer,
});

export default rootReducer;
