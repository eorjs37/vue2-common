import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isPlay: false
  },
  mutations: {
    setPlay(state, val) {
      state.isPlay = val;
      localStorage.setItem("isPlay", val)
    }
  },
  getters: {
    getIsPlay(state) {
      return state.isPlay;
    }
  }
})

export { store }
