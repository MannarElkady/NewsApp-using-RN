import i18n from './index';
import {useEffect} from 'react';
import {useAppSelector} from '../Redux/store';
import * as RNLocalize from 'react-native-localize';

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
