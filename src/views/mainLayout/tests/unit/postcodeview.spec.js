import { shallowMount } from '@vue/test-utils'
import postcodeView from '@/views/mainLayout/postcodeView.vue'

function PostCode(callback) {
  this.callback = callback
}

describe('Name of the group', () => {
  let wrapper = null
  let windowSpy = null
  beforeEach(async () => {
    wrapper = shallowMount(postcodeView)
    windowSpy = jest.spyOn(window, 'window', 'get')
  })
  test('주소 검색 버튼을 누르면 팝업이 뜬다', async () => {
    windowSpy.mockImplementation(() => ({
      daum: {
        PostCode: new PostCode(() => {}),
        open: jest.fn()
      }
    }))
    const postBtn = wrapper.findComponent('#postbtn')
    await postBtn.trigger('click')
  })
})
