import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      age: 0
    }
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo
    }
  },
  actions: {
    apiSetUserInfo({ commit }) {
      new Promise((reslove) => {
        reslove('success')
        commit('setUserInfo', {
          name: '홍길동',
          age: 31
        })
      })
    }
  },
  modules: {}
})

export { store }
