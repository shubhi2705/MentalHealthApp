// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../Languages/en.json';
import translationES from '../Languages/es.json';
import translationDE from '../Languages/de.json';
import translationKO from '../Languages/ko.json';
import translationZH from '../Languages/zh.json';
import translationJA from '../Languages/ja.json';
import translationFR from '../Languages/fr.json';
import translationHI from '../Languages/hi.json';
// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
  de: {
    translation: translationDE,
  },
  hi: {
    translation: translationHI,
  },
  ko: {
    translation: translationKO,
  },
  ja: {
    translation: translationJA,
  },
  zh: {
    translation: translationZH,
  }
};

// i18n configuration
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
