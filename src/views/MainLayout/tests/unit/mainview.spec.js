import { shallowMount, createLocalVue } from '@vue/test-utils'
import MainView from '../../MainView.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)

describe('MainView Testing', () => {
  let wrapper = null
  let store = null

  const videoPlayer = {
    setVideo: jest.fn()
  }
  beforeEach(() => {
    jest.useFakeTimers()

    store = new Vuex.Store({
      state: {
        userInfo: {
          name: '',
          age: 0
        }
      },
      getters: {
        getUserInfo(state) {
          return state.userInfo
        }
      },
      mutations: {
        setUserInfo(state, payload) {
          state.userInfo = payload
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
    expect(userInfoEle.text()).toBe('홍길동')
    expect(userInfoAgeEle.text()).toBe('31')
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
})
