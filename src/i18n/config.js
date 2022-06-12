import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enAuth from './locales/en/auth.json';
import arAuth from './locales/ar/auth.json';

import arCommon from './locales/ar/common.json';
import enCommon from './locales/en/common.json';

import arNav from './locales/ar/nav.json';
import enNav from './locales/en/nav.json';

import Cookies from 'universal-cookie';

const cookie = new Cookies()

const currentLang = cookie.get('marketyLang')

i18n.use(initReactI18next).init({
  fallbackLng: 'ar',
  lng: currentLang,
  resources: {
    en: {
      auth: enAuth,
      common: enCommon,
      nav: enNav
    },
    ar: {
      auth: arAuth,
      common: arCommon,
      nav: arNav
    }
  },
  ns: ['auth', 'common', 'nav'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'ar'];

export default i18n;