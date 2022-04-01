import {combineReducers} from '@reduxjs/toolkit';
import NewsListReducer from './NewsListReducer';

const rootReducer = combineReducers({
  newsFeedReducer: NewsListReducer,
});

export default rootReducer;
