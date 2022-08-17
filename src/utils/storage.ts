type IBrowserStorage = 'local' | 'session'
type IBrowserStorageKey = 'curSystemLang'
export const getStorageValue = (type: IBrowserStorage, key: IBrowserStorageKey): string | null => {
  if (type === 'local') {
    return window.localStorage.getItem(key)
  } else if (type === 'session') {
    return window.sessionStorage.getItem(key)
  }
  return null;
}

export const setStorageKeyAndValue = (type: IBrowserStorage, key: IBrowserStorageKey, value: string): void => {
  if (type === 'local') {
    window.localStorage.setItem(key, value)
  } else if (type === 'session') {
    window.sessionStorage.setItem(key, value)
  }
}