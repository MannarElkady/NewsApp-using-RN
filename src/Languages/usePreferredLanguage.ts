import i18n from './index';
import {useEffect} from 'react';
import {AppDispatch, useAppSelector} from '../Redux/store';
import * as RNLocalize from 'react-native-localize';
import {setIsAuto, setLanguage} from '../Redux/Slicers/LanguageReducer';

export const shouldUpdateStateWithInAppLanguageSelection = (
  dispatcher: AppDispatch,
  isEnglish: boolean,
) => {
  dispatcher(setIsAuto(false));
  dispatcher(setLanguage(isEnglish ? 'en' : 'ar'));
};

const usePreferredLanguage = () => {
  const isAutoLanguageMode = useAppSelector(
    state => state.languageReducer.isAuto,
  );
  let currentLanguage = useAppSelector(state => state.languageReducer.language);
  useEffect(() => {
    let currentLang = isAutoLanguageMode
      ? RNLocalize.getLocales()[0].languageCode
      : currentLanguage;
    i18n.changeLanguage(currentLang);
  }, [currentLanguage, isAutoLanguageMode]);
};

export default usePreferredLanguage;
