import { createLocalVue, shallowMount } from '@vue/test-utils'
import insertView from '@/views/mainLayout/insertView.vue'
import Vuex from 'vuex'
import { store } from '@/store'
describe('InsertView', () => {
  let wrapper = null
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    window.alert = jest.fn()
    wrapper = shallowMount(insertView, {
      store,
      localVue
    })
  })
  test('2개의 체크박스에 값을 체크 한다', async () => {
    const li1 = wrapper.findComponent('#value1')
    await li1.setChecked()
    const li2 = wrapper.findComponent('#value2')
    await li2.setChecked()

    expect(wrapper.vm.selectbox).toEqual(['1', '2'])
  })

  test('아무것도 선택하지 않으면 Alert을 띄운다', async () => {
    const validateBtn = wrapper.findComponent('#validateBtn')
    validateBtn.trigger('click')
    expect(window.alert).toBeCalledWith(`값을 선택해주세요`)
  })

  test('2번째 ul 값을 선택해주세요', async () => {
    const li1 = wrapper.findComponent('#key1')
    await li1.setChecked()
    const li2 = wrapper.findComponent('#key2')
    await li2.setChecked()
    expect(wrapper.vm.selectbox2).toEqual([1, 2])
  })
})
