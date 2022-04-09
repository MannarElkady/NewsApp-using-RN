import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './translations/en.json';
import ar from './translations/ar.json';
import * as RNLocalize from 'react-native-localize';

// this plugin could be used if
// the app has only to respect the os prefrence,
// could be replaced with calling of usePreferredLanguage
const languageDetector = {
  type: 'languageDetector',
  async: true,
  init: function (services, detectorOptions, i18nextOptions) {},
  detect: function (callback) {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  cacheUserLanguage: function (lng) {},
};

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18next;
