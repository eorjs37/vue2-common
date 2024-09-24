import { shallowMount } from '@vue/test-utils'
import HlsView from '../../HlsView.vue'

describe('hlsview unit test', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallowMount(HlsView, {
      global: {
        config: {
          globalProperties: {
            $VideoPlayer: {
              setVideo: jest.fn(),
              registerEventListener: jest.fn()
            }
          }
        }
      }
    })
  })
  test('재생을 누르면 노래가 시작된다', async () => {
    console.log(wrapper)
  })

  test('중지를 누르면 노래가 중지가된다', async () => {})

  test('노래가 끝나면, 다시 처음부터 시작한다', async () => {})
})
