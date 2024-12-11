import { shallowMount } from '@vue/test-utils'
import HlsView from '../../HlsView.vue'
import * as vuecookies from 'vue3-cookies'
const $VideoPlayer = {
  setVideo: jest.fn(),
  registerEventListener: jest.fn(),
  playerMusic: jest.fn(),
  startLoad: jest.fn(),
  onPlay: jest.fn(),
	onPause: jest.fn(),
	getVolume: jest.fn(),
	fadeIn: jest.fn(),
	fadeOut: jest.fn().mockImplementation(() => {
		return Promise.resolve(true)
	})
}

jest.spyOn(vuecookies, 'useCookies')

describe('hlsview unit test', () => {
  let wrapper = null
  jest.useFakeTimers()
  const { cookies } = vuecookies.useCookies()
  cookies.set = jest.fn()
  beforeEach(() => {
    wrapper = shallowMount(HlsView, {
      global: {
        config: {
          globalProperties: {
            $VideoPlayer
					}
				},
				mocks: {
					$t: () => {}
				}
      }
    })
  })
  afterEach(() => {
    $VideoPlayer.setVideo.mockClear()
    $VideoPlayer.registerEventListener.mockClear()
    $VideoPlayer.playerMusic.mockClear()
    $VideoPlayer.startLoad.mockClear()
    $VideoPlayer.onPlay.mockClear()
    $VideoPlayer.onPause.mockClear()
    jest.clearAllTimers()
	})


	test('초기화 테스트', async () => {
		console.log(wrapper.html());

    //given

    //when

    //then
    expect($VideoPlayer.setVideo).toBeCalled()
    expect($VideoPlayer.registerEventListener).toHaveBeenNthCalledWith(
      1,
      'pause',
      wrapper.vm.pauseEventListener
    )
    expect($VideoPlayer.registerEventListener).toHaveBeenNthCalledWith(
      2,
      'play',
      wrapper.vm.playEventListener
    )
    expect($VideoPlayer.registerEventListener).toHaveBeenNthCalledWith(
      3,
      'timeupdate',
      wrapper.vm.timeUpdateEventListener
    )
    expect($VideoPlayer.registerEventListener).toHaveBeenNthCalledWith(
      4,
      'ended',
      wrapper.vm.endedEventListener
    )
    expect($VideoPlayer.playerMusic).toBeCalled()
    expect($VideoPlayer.startLoad).toBeCalledWith(-1)
    //쿠키
    expect(cookies.set).toBeCalledWith('dummy', 'test@gmail.com')
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

	test('FadeOut unittesting', async () => {
		//given
		const fadeOutBtn = wrapper.find('#fadeOut')
		//when
		await fadeOutBtn.trigger('click')

		//then
		expect($VideoPlayer.fadeOut).toBeCalled()
	});

	test('FadeIn unittesting', async () => {
		//given
		const fadeInBtn = wrapper.find('#fadeIn')
		//when
		await fadeInBtn.trigger('click')
		//then
		expect($VideoPlayer.fadeIn).toBeCalled()
	})
})
