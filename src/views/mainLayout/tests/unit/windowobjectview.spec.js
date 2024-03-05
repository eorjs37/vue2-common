import { shallowMount } from '@vue/test-utils'
import WindowObjectView from '@/views/mainLayout/windowObjectView.vue'
describe('윈도우 객체 테스트', () => {
  let wrapper = null
  let windowSpy = null
  beforeEach(() => {
    wrapper = shallowMount(WindowObjectView)
    windowSpy = jest.spyOn(window, 'window', 'get')
  })
  test('버튼을 클릭하면 리로드를 한다 ', async () => {
    windowSpy.mockImplementation(() => ({
      location: {
        reload: jest.fn()
      }
    }))
    const btn = wrapper.findComponent('#btn')
    await btn.trigger('click')
  })
})
