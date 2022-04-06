import LanguageReducer, {
  setIsAuto,
  setLanguage,
} from '../../src/Redux/Slicers/LanguageReducer';

test('should return intial state when state is undefined firstly', () => {
  expect(LanguageReducer(undefined, {})).toEqual({
    language: 'en',
    isAuto: false,
  });
});

test('should return language: ar when setLanguage', () => {
  const state = {language: 'en', isAuto: false};
  const expectedState = {language: 'ar', isAuto: false};
  expect(LanguageReducer(state, setLanguage('ar'))).toEqual(expectedState);
});

test('should return isAuto:true state when setAuto is true', () => {
  const state = {language: 'ar', isAuto: false};
  const expectedState = {language: 'ar', isAuto: true};
  expect(LanguageReducer(state, setIsAuto(true))).toEqual(expectedState);
});

test('should maintain last prefered language with language: en when isAuto changed', () => {
  const state = {language: 'en', isAuto: false};
  const expectedState = {language: 'en', isAuto: true};
  expect(LanguageReducer(state, setIsAuto(true))).toEqual(expectedState);
});
