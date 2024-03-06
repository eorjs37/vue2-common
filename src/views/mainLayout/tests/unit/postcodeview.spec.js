import { shallowMount } from '@vue/test-utils'
import postcodeView from '@/views/mainLayout/postcodeView.vue'

function Postcode(callback) {
  this.callback = callback
}

describe('Name of the group', () => {
  let wrapper = null
  beforeEach(async () => {
    wrapper = shallowMount(postcodeView)
  })
  test('주소 검색 버튼을 누르면 팝업이 뜬다', async () => {
    Object.defineProperty(window, 'daum', {
      value: {
        Postcode,
        open: () => {}
      }
    })
    const postBtn = wrapper.findComponent('#postbtn')
    await postBtn.trigger('click')
  })
})
