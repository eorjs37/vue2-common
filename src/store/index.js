import Vue from 'vue'
import Vuex from 'vuex'
import { userInfo } from './module/userInfo';
import { hoc } from './module/hoc';
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isPlay: false,
    brandPlayList: [],
    brandActiveIndex: -1,
    userName: "안녕하세요",
    lastName: "최대건"
  },
  mutations: {
    setPlay(state, val) {
      state.isPlay = val;
      localStorage.setItem("isPlay", val)
    },
    setBrandPlayList(state, val) {
      state.brandPlayList = [...state.brandPlayList, val]
    },
    setBrandActiveIndex(state, val) {
      state.brandActiveIndex = val;
    }
  },
  getters: {
    getIsPlay(state) {
      return state.isPlay;
    },
    getBrandList(state) {
      return state.brandPlayList;
    },
    getBrandActiveIndex(state) {
      return state.brandActiveIndex;
    },
    getSelectBrandMusic: state => idx => {
      return state.brandPlayList.find((_, index) => index === idx)
    },
    getCurrentBrandMusic(state) {
      return state.brandPlayList[state.brandActiveIndex];
    },
    getBrandListLength(state) {
      return state.brandPlayList.length;
    },
    getterFullName(state) {
      return `${state.userName} ${state.lastName}님`
    }
  },
  modules: {
    userInfo,
    hoc
  }
}

)

export { store }
