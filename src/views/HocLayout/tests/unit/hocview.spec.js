import { shallowMount } from '@vue/test-utils'
import HocView from '../../HocView.vue'
import { store } from '@/store'
describe('Name of the group', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallowMount(HocView, {
      global: {
        plugins: [store]
      }
    })
  })

  test('should ', async () => {
    expect(1).toBe(1)
  })

  test('버튼 클릭', async () => {
    const btn1 = wrapper.find('#btn1')
    btn1.trigger('click')
  })
})
