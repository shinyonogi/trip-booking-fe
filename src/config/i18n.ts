import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'en-US', 'other-languages'],
    fallbackLng: 'en',
    detection: {
        order: ['navigator', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag'],
        caches: ['localStorage','cookie'],
    },
    backend: {
        loadPath: '/locales/{{lng}}.json',
      },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
