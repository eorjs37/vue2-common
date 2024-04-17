import { shallowMount, createLocalVue } from '@vue/test-utils'
import MainView from '../../MainView.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

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

    store = new Vuex.Store({
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
      store,
      localVue,
      mocks: {
        $VideoPlayer: videoPlayer
      }
    })
  })
  afterEach(() => {
    jest.clearAllTimers()
  })
  test('나의 이름,나이가 세팅이 된다 ', async () => {
    const userInfoEle = wrapper.find('[data-userinfo="username"]')
    const userInfoAgeEle = wrapper.find('[data-userinfo="userage"]')
    expect(userInfoEle.text()).toBe('')
    expect(userInfoAgeEle.text()).toBe('0')
  })

  test('가짜 함수 2초마다 호출', async () => {
    const spy = jest.spyOn(wrapper.vm, 'fakeApiInterval')

    jest.advanceTimersByTime(2000)

    expect(spy).toBeCalled()
  })

  test('비디오 객체를 세팅한다', async () => {
    const spySetVideo = jest.spyOn(videoPlayer, 'setVideo')

    expect(spySetVideo).toBeCalled()

    spySetVideo.mockClear()
  })

  test('버튼2 누르기', async () => {
    const btn2 = wrapper.find('[data-btn="btn2"]')
    await btn2.trigger('click')
    expect(state.counter).toBe(2)
  })

  test('버튼3 누르기', async () => {
    const btn3 = wrapper.find('[data-btn="btn3"]')
    await btn3.trigger('click')
    expect(state.userInfo.name).toBe('홍길동')
    expect(state.userInfo.age).toBe(31)
  })
})
