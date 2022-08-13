export default {
  addValue({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit("addValue");
        resolve();
      }, 2000);
    });
  },
};
