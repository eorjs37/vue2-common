import { shallowMount } from '@vue/test-utils'
import postcodeView from '@/views/mainLayout/postcodeView.vue'

function Postcode(callback) {
  this.callback = callback
}

Postcode.prototype.open = jest.fn().mockImplementation(() => {})
describe('카카오 주소 테스트', () => {
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
    const result = new Postcode({
      oncomplete: (data) => {
        wrapper.vm.address = data.address
      }
    })

    result.callback.oncomplete({
      address: '서울시 마포구'
    })

    expect(wrapper.vm.address).toBe('서울시 마포구')
  })
})
