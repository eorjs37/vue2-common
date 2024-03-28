import Vue from 'vue'
import Vuex from 'vuex'
import { userInfo } from './module/userInfo'
import { hoc } from './module/hoc'
import { common } from './module/common'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isPlay: false,
    brandPlayList: [],
    brandActiveIndex: -1,
    userName: '',
    lastName: '최대건'
  },
  mutations: {
    setPlay(state, val) {
      state.isPlay = val
      localStorage.setItem('isPlay', val)
    },
    setBrandPlayList(state, val) {
      state.brandPlayList = [...state.brandPlayList, val]
    },
    setBrandActiveIndex(state, val) {
      state.brandActiveIndex = val
    },
    setUserName(state, val) {
      state.userName = val
    }
  },
  getters: {
    getIsPlay(state) {
      return state.isPlay
    },
    getBrandList(state) {
      return state.brandPlayList
    },
    getBrandActiveIndex(state) {
      return state.brandActiveIndex
    },
    getSelectBrandMusic: (state) => (idx) => {
      return state.brandPlayList.find((_, index) => index === idx)
    },
    getCurrentBrandMusic(state) {
      return state.brandPlayList[state.brandActiveIndex]
    },
    getBrandListLength(state) {
      return state.brandPlayList.length
    },
    getterFullName(state) {
      return `${state.userName} ${state.lastName}님`
    },
    getterUserName(state) {
      return state.userName
    }
  },
  actions: {
    apiGetUserInfo({ commit }) {
      commit('setUserName', '홍길동')
    }
  },
  modules: {
    userInfo,
    hoc,
    common
  }
})

export { store }
