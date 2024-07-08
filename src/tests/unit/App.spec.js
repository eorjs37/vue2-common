import App from '@/App.vue'
import { shallowMount } from '@vue/test-utils'
import { router } from '@/router'
describe('App', () => {
  test('Dummy Rendering', async () => {
    shallowMount(App, {
      global: {
        plugins: [router],
        mocks: {
          $crontab: {
            addJob: jest.fn()
          },
          $VideoPlayer: {
            setVideo: jest.fn(),
            playerMusic: jest.fn(),
            startLoad: jest.fn(),
            onPlay: jest.fn().mockImplementation(() => Promise.resolve())
          }
        }
      }
    })
    expect(1).toBe(1)
  })
})
