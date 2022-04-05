import i18n from '../../i18n';
import {useEffect} from 'react';
import {useAppSelector} from '../Redux/store';

const usePreferredLanguage = () => {
  let currentLanguage = useAppSelector(state => state.languageReducer.language);
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);
};

export default usePreferredLanguage;
