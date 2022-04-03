import {Appearance, ColorSchemeName} from 'react-native';
import {
  setIsDarkModeTheme,
  setAutoTheme,
} from '../../Redux/Slicers/ThemingReducer';
import {AppDispatch} from '../../Redux/store';

export const handleInAppMode = (dispatch: AppDispatch, value: boolean) => {
  dispatch(setIsDarkModeTheme(value));
  dispatch(setAutoTheme(false));
};

export const handleAutoMode = (dispatch: AppDispatch, enabled: boolean) => {
  dispatch(setAutoTheme(enabled));
  let osTheme = getOSMode();
  setAppMode(dispatch, osTheme);
};

const getOSMode = () => {
  return Appearance.getColorScheme();
};

export const setAppMode = (dispatch: AppDispatch, osMode: ColorSchemeName) => {
  if (osMode === 'dark') {
    dispatch(setIsDarkModeTheme(true));
  } else {
    dispatch(setIsDarkModeTheme(false));
  }
};
