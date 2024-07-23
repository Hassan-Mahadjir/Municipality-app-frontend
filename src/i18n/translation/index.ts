import en from './en.json';
import tr from './tr.json';
import { init18n } from '@/i18n/init';

export const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

export const fallbackLng = 'en';
export type LanguageCode = keyof typeof resources;
const i18n = init18n({ resources, fallbackLng });
export default i18n;
