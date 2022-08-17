import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';
import { getStorageValue } from '@/utils/storage'
import _ from 'lodash';

const curSystemLang = getStorageValue('local', 'curSystemLang')
const i18n = createI18n({
  locale: _.isNull(curSystemLang) ? 'zh' : curSystemLang,
  fallbackLocale: 'en',
  messages: {
    zh,
    en,
  }
})
export default i18n;