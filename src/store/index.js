import { createStore } from 'vuex'
import { module1 } from './modules/module1'
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
    },
    getMessage(state) {
      return state.message
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
      try {
        const { data } = await dummyapi1()
        const { message } = data
        commit('setMessage', message)
      } catch (error) {
        console.error('error : ', error)
      } finally {
        //
      }
    }
  },
  modules: {
    module1
  }
})

export { store }
