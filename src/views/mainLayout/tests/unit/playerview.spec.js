import { shallowMount } from '@vue/test-utils'
import playerView from '@/views/mainLayout/playerView.vue'
describe('PlayerView', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallowMount(playerView)
  })
  test('버튼을 클릭하면 자식 컴퍼넌트를 호출한다 ', async () => {
    const btn = wrapper.findComponent({ ref: 'btn1' })
    await btn.trigger('click')
    const findComp = wrapper.findComponent({ ref: 'child1' })
    expect(findComp.exists()).toBeTruthy()
  })

  test('자식 컴퍼넌트에서 데이터를 전송하고 alert을 띄운다', async () => {
    window.alert = jest.fn()
    await wrapper.setData({
      isShow: true
    })
    const findComp = wrapper.findComponent({ ref: 'child1' })
    await findComp.vm.$emit('send-data', '성공하셨습니다')
    expect(window.alert).toBeCalledWith('성공하셨습니다')
  })
})
