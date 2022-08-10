import { defineStore } from 'pinia';

interface IAppState {
  darkMode?: 'light' | 'dark';
  count: number;
}
export const useMainStore = defineStore('main', {
  state: (): IAppState => ({
    darkMode: 'light',
    count: 100,
  }),
  actions: {
    changeCount(num: number) {
      this.count += num;
      this.darkMode = this.darkMode === 'dark' ? 'light' : 'dark';
    }
  },
  getters: {

  },
})