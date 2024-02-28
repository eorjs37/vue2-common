const common = {
  namespaced: true,
  state: () => ({
    list1: [
      { key: 1, value: '사과' },
      { key: 2, value: '과일' },
      { key: 3, value: '바나나' }
    ]
  }),
  mutations: {
    setList1(state, payload) {
      state.list1 = payload
    }
  },
  getters: {
    getList1(state) {
      return state.list1
    }
  }
}

export { common }
