import { dummySaveApi } from '@/api/dummyapi1'
const module1 = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state) {
      // `state` is the local module state
      state.count++
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
    async saveDummy({ commit }) {
      try {
        const { data } = await dummySaveApi()
        const { success } = data
        if (success) {
          commit('increment')
        }
      } catch (error) {
        if (error.response) {
          const { status, data } = error.response
          if (status === 400) {
            const { success } = data
            if (success) {
              alert('에러')
            }
          }
        }
        console.error('saveDummy error : ', error)
      }
    }
  }
}
export { module1 }
