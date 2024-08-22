import { shallowMount } from '@vue/test-utils'
import HocView from '../../HocView.vue'
import { store } from '@/store'
import axios from 'axios'
describe('HocView.vue 테스트', () => {
  let wrapper = null
  beforeEach(() => {
    axios.get = jest.fn().mockImplementation((url) => {
      if (url === '/api/dummy') {
        return Promise.resolve({
          status: 200,
          data: {
            message: 'TEST'
          }
        })
      }
    })

    wrapper = shallowMount(HocView, {
      global: {
        plugins: [store]
      }
    })
  })

  test('버튼 클릭', async () => {
    const btn1 = wrapper.find('#btn1')
    const message = wrapper.find('#message')
    await btn1.trigger('click')

    expect(message.text()).toBe('TEST')
  })
})
