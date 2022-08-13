export default {
  namespaced: true,
  state: {
    moduleAState: 1,
  },
  mutations: {
    setModuleAState(state, val) {
      state.moduleAState = val;
    },
  },
  getters: {
    doubleMuduleAState(state) {
      return state.moduleAState * 2;
    },
  },
  actions: {
    getState() {
      return new Promise();
    },
  },
  modules: {
    moduleAChild: {
      namespaced: true,
      state: {
        moduleAChildState: 2,
      },
    },
  },
};
