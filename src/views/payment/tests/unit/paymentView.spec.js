import { shallowMount } from '@vue/test-utils'
import paymentView from '../../paymentView.vue'

describe('paymentView ', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(paymentView)
  })
  test('가격이 2200원이다', () => {
    const priceEle = wrapper.findComponent('#price')
    const price = parseInt(priceEle.text())
    expect(price).toBe(2200)
  })
})
