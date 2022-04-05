import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './src/Languages/translations/en.json';
import ar from './src/Languages/translations/ar.json';

// const languageDetector = {
//   type: 'languageDetector',
//   async: true,
//   detect: callback => {
//     const bestAvailableLanguage = RNLocalize.findBestAvailableLanguage(
//       Object.keys(SupportedLanguages),
//     );
//     return callback(bestAvailableLanguage.languageTag);
//   },
//   init: () => {},
//   casheUserLanguage: () => {},
// };

i18next
  // .use(languageDetector)
  .use(initReactI18next)
  .init({
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
