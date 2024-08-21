import { createStore } from 'vuex'
import { dummyapi1 } from '@/api/dummyapi1'
const store = createStore({
  state: {
    userInfo: {
      name: '',
      age: 0
    },
    counter: 1,
    message: ''
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setCounter(state, payload) {
      state.counter = payload
    },
    setMessage(state, payload) {
      state.message = payload
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
    },
    async apiDummyApi1({ commit }) {
      await dummyapi1()
        .then((res) => {
          const { data } = res
          const { message } = data

          commit('setMessage', message)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          console.log('finally')
        })
    }
  },
  modules: {}
})

export { store }
