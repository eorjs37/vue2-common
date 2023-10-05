const hoc = {
  namespaced: true,
  state: () => ({
    isLoading: false
  }),
  mutations: {
    setIsLoading(state, val) {
      state.isLoading = val
    }
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    }
  }
}

export { hoc }
