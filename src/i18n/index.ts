import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';
import { useLocaleStore } from '@/store/modules/locale';
const localeStore = useLocaleStore()

console.log('localeStore',localeStore);
const i18n = createI18n({
  locale: localeStore.getLocale,
  fallbackLocale: 'en',
  messages: {
    zh,
    en,
  }
})
export default i18n;