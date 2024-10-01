import { shallowMount } from '@vue/test-utils'
import HlsView from '../../HlsView.vue'

const $VideoPlayer = {
  setVideo: jest.fn(),
  registerEventListener: jest.fn(),
  playerMusic: jest.fn(),
  startLoad: jest.fn(),
  onPlay: jest.fn(),
  onPause: jest.fn()
}

describe('hlsview unit test', () => {
  let wrapper = null
  jest.useFakeTimers()
  beforeEach(() => {
    wrapper = shallowMount(HlsView, {
      global: {
        config: {
          globalProperties: {
            $VideoPlayer
          }
        }
      }
    })
  })
  afterEach(() => {
    $VideoPlayer.onPlay.mockClear()
    $VideoPlayer.playerMusic.mockClear()
    $VideoPlayer.startLoad.mockClear()
    jest.clearAllTimers()
  })
  test('재생을 누르면 노래가 시작된다', async () => {
    //given(준비)
    const playBtn = wrapper.find('#playbtn')
    //when(실행)
    await playBtn.trigger('click')
    //then(검증)
    expect($VideoPlayer.onPlay).toBeCalled()
  })

  test('중지를 누르면 노래가 중지가된다', async () => {
    //given(준비)
    const pausebtn = wrapper.find('#pausebtn')
    //when(실행)
    await pausebtn.trigger('click')
    //then(검증)
    expect($VideoPlayer.onPause).toBeCalled()
  })

  test('노래가 끝나면, 1.5초 이후 다시 처음부터 시작한다', async () => {
    //given
    const instance = wrapper.vm
    //when
    instance.endedEventListener()
    //then
    jest.advanceTimersByTime(1500)
    expect($VideoPlayer.onPlay).toBeCalled()
  })
})
