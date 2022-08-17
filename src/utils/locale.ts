import { getStorageValue, setStorageKeyAndValue } from '@/utils/storage'
type ILanguageType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';
export const changeSystemLang = (lang: ILanguageType): void => {
  setStorageKeyAndValue('local', 'curSystemLang', lang)
}

export const circleSwitchSystemLang = (): void => {
  const langArr: ILanguageType[] = ['zh_CN', 'en', 'ru', 'ja', 'ko']
  const curSystemLang: ILanguageType = (getStorageValue('local', 'curSystemLang') ?? 'zh_CN') as ILanguageType
  const index: number = langArr.indexOf(curSystemLang)
  setStorageKeyAndValue('local', 'curSystemLang', langArr[(index + 1) % 5])
}