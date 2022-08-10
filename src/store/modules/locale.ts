import { defineStore } from 'pinia';

type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

interface LocaleSetting {
  showPicker: boolean;
  locale: LocaleType;
  fallback: LocaleType;
  availableLocales: LocaleType[];
}

interface ILocaleState {
  systemLangInfo: LocaleSetting
}

export const useLocaleStore = defineStore('locale', {
  state: (): ILocaleState => ({
    systemLangInfo: {
      showPicker: false,
      locale: 'zh_CN',
      fallback: 'en',
      availableLocales: ['zh_CN', 'en']
    }
  }),
  actions: {
    setSystemLangInfo(info: Partial<LocaleSetting>) {
      this.systemLangInfo = {
        ...this.systemLangInfo,
        ...info,
      }
    },
  },
  getters: {
    getLocale(): LocaleType {
      return this.systemLangInfo?.locale ?? 'zh_CN';
    }
  },
})