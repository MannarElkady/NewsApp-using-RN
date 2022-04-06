import ThemingReducer, {
  setAutoTheme,
  setIsDarkModeTheme,
} from '../../src/Redux/Slicers/ThemingReducer';

test('should return intial state when state is undefined', () => {
  expect(ThemingReducer(undefined, {})).toEqual({
    isDarkTheme: false,
    isAutoTheme: false,
  });
});

test('should return isDarkTheme: true when action setIsDarkModeTheme is true', () => {
  const oldState = {
    isDarkTheme: false,
    isAutoTheme: false,
  };
  const newState = {
    isDarkTheme: true,
    isAutoTheme: false,
  };
  expect(ThemingReducer(oldState, setIsDarkModeTheme(true))).toEqual(newState);
});

test('should return isAutoTheme: true when action setAutoTheme is true', () => {
  const oldState = {
    isDarkTheme: false,
    isAutoTheme: false,
  };
  const newState = {
    isDarkTheme: false,
    isAutoTheme: true,
  };
  expect(ThemingReducer(oldState, setAutoTheme(true))).toEqual(newState);
});
