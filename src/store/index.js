import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
import catalog from './modules/catalog'

export default createStore({
  modules: {
    catalog, 
  },
  // plugins: [createPersistedState()],
});
