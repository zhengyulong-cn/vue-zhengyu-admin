import { defineStore } from 'pinia';

type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

interface LocaleSetting {
  showPicker: boolean;
  locale: LocaleType;
  fallback: LocaleType;
  availableLocales: LocaleType[];
}