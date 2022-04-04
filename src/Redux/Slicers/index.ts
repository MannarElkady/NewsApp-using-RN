import {combineReducers} from '@reduxjs/toolkit';
import LanguageReducer from './LanguageReducer';
import NewsListReducer from './NewsListReducer';
import ThemingReducer from './ThemingReducer';

const rootReducer = combineReducers({
  newsFeedReducer: NewsListReducer,
  themingReducer: ThemingReducer,
  languageReducer: LanguageReducer,
});

export default rootReducer;
