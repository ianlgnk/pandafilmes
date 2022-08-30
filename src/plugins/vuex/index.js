import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
});

export const Store = {
  instance: store,

  registerModule(path, rawModule, options) {
    store.registerModule(path, rawModule, options);
  },

  dispatch(type, payload) {
    return store.dispatch(type, payload);
  },
};
