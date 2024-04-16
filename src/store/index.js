import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      age: 0
    },
    counter: 1
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setCounter(state, payload) {
      state.counter = payload
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo
    },
    getCounter(state) {
      return state.counter
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
