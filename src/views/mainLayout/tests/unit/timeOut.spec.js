import { shallowMount } from '@vue/test-utils'
import timeOut from '@/views/mainLayout/timeOut.vue'

describe('timeOut Testing', () => {
  let wrapper = null

  //jest.useFakeTimers()
  beforeEach(() => {
    wrapper = shallowMount(timeOut)
  })

  afterEach(() => {
    jest.clearAllTimers()
  })
  test('10초 기다리고 1초 증가', () => {
    jest.useFakeTimers()
    let counter = 0
    setTimeout(() => {
      counter++
      expect(counter).toBe(1)
    }, 10000)

    jest.runAllTimers()
  })

  test('5초 후 화면에서 count값이 2로 된다', async () => {
    const count = wrapper.findComponent('#count')
    jest.advanceTimersByTime(5000)
    await wrapper.vm.$nextTick()
    expect(parseInt(count.text())).toBe(1)
  })

  test('1초마다 intervalCount를 증가시킨다', async () => {
    const count = wrapper.findComponent('#intervalCount')
    jest.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick()
    expect(parseInt(count.text())).toBe(1)
  })
})
