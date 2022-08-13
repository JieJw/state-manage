import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import moduleA from "./modulesA";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    moduleA,
  },
});
