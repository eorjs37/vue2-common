import { shallowMount } from '@vue/test-utils'
import HocView from '../../HocView.vue'
import { store } from '@/store'
import axios from 'axios'
describe('HocView.vue 테스트', () => {
  let wrapper = null
  beforeEach(() => {
    /**
     * @description get 함수 정리
     */
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

    axios.post = jest.fn().mockImplementation((url) => {
      if (url === '/api/savedummy') {
        return Promise.resolve({
          status: 200,
          data: {
            success: true
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

  test('btn2 클릭', async () => {
    const btn2 = wrapper.find('#btn2')
    const doubleCount = wrapper.find('#doubleCount')
    await btn2.trigger('click')

    expect(parseInt(doubleCount.text())).toBe(2)
  })
})
