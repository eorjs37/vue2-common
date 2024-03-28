const userInfo = {
  namespaced: true,
  state: () => ({
    count: 1
  }),
  mutations: {
    increment(state) {
      state.count++
    }
  },
  getters: {
    doubleCont(state) {
      return state.count * 2
    }
  },

  actions: {}
}

export { userInfo }
