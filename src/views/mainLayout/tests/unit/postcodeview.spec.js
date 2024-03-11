import { shallowMount } from '@vue/test-utils'
import postcodeView from '@/views/mainLayout/postcodeView.vue'

function Postcode(callback) {
  this.callback = callback
  this.close = () => {
    this.callback.oncomplete({
      address: '주소'
    })
  }
}

Postcode.prototype.open = jest.fn().mockImplementation(() => {})

describe('Name of the group', () => {
  let wrapper = null
  let spyOn = null
  beforeEach(async () => {
    wrapper = shallowMount(postcodeView)
    spyOn = jest.spyOn(window, 'window', 'get')
    spyOn.mockImplementation(() => {
      return {
        daum: {
          Postcode
        }
      }
    })
  })

  afterEach(() => {
    spyOn.mockRestore()
  })
  test('주소 검색 버튼을 누르면 카카오 주소 검색 팝업이 뜬다', async () => {
    const spyPost = jest.spyOn(Postcode.prototype, 'open')
    const postBtn = wrapper.findComponent('#postbtn')
    await postBtn.trigger('click')
    expect(spyPost).toHaveBeenCalled()
  })

  test('주소검색에서 받은 값을 세팅한다 ', async () => {
    const postBtn = wrapper.findComponent('#postbtn')
    await postBtn.trigger('click')
  })
})
