export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUserData(state, data) {
      state.user = data
    },
  },
}
