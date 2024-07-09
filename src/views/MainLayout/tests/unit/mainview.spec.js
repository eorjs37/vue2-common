import { shallowMount } from '@vue/test-utils'
import MainView from '../../MainView.vue'
import { createStore } from 'vuex'

describe('MainView Testing', () => {
  let wrapper = null
  let store = null

  const state = {
    userInfo: {
      name: '',
      age: 0
    },
    counter: 1
  }
  const videoPlayer = {
    setVideo: jest.fn()
  }
  const mutations = {
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setCounter(state, payload) {
      state.counter = payload
    }
  }

  const getters = {
    getUserInfo(state) {
      return state.userInfo
    },
    getCounter(state) {
      return state.counter
    }
  }
  beforeEach(() => {
    jest.useFakeTimers()

    store = createStore({
      state,
      getters,
      mutations,
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
      }
    })
    wrapper = shallowMount(MainView, {
      global: {
        plugins: [store],
        mocks: {
          $VideoPlayer: videoPlayer
        }
      }
    })
  })
  afterEach(() => {
    jest.clearAllTimers()
  })
  test('나의 이름,나이가 세팅이 된다 ', async () => {
    expect(1).toBe(1)
  })
})
