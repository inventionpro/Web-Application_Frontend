import { createStore } from 'vuex';

export default createStore({
  state: {
    workspace: 0,
    blocklyLocale: ['en', 'fr'].includes(navigator.language.split('-')[0]) ? navigator.language.split('-')[0] : 'en'
  },
  mutations: {
    setWorkspace(state, { workspace }) {
      state.workspace = workspace;
    },
    setLocale(state, { newLocale }) {
      state.blocklyLocale = newLocale;
      localStorage.setItem('blocklyLocale', newLocale);
    }
  }
});
