import {Appearance, ColorSchemeName} from 'react-native';
import {
  setIsDarkModeTheme,
  setAutoTheme,
} from '../Redux/Slicers/ThemingReducer';
import {AppDispatch} from '../Redux/store';

export const handleInAppMode = (dispatch: AppDispatch, value: boolean) => {
  dispatch(setAutoTheme(false));
  dispatch(setIsDarkModeTheme(value));
};

export const handleAutoMode = (dispatch: AppDispatch, enabled: boolean) => {
  dispatch(setAutoTheme(enabled));
  if (enabled) {
    let osTheme = getOSMode();
    setAppMode(dispatch, osTheme);
  }
};

export const getOSMode = () => {
  return Appearance.getColorScheme();
};

export const setAppMode = (dispatch: AppDispatch, osMode: ColorSchemeName) => {
  dispatch(setIsDarkModeTheme(osMode === 'dark'));
};
