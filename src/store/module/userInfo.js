const userInfo = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    doubleCont(state) {
      return state.count * 2
    }
  }
}

export { userInfo }
