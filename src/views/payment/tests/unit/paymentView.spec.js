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

  test('할인율 버튼을 클릭하면 10% 할인이되며, 2200 - (2200 * 0.1) = 1980원이 된다 ', async () => {
    const btn = wrapper.findComponent('#saleBtn')

    await btn.trigger('click')
    const priceEle = wrapper.findComponent('#price')
    const price = parseInt(priceEle.text())
    expect(price).toBe(1980)
  })

  test('할인금액 버튼을 클릭하면 해당 금액만큼 차감이된다. 2200 - 1000 = 1100원이  된다', async () => {
    const btn = wrapper.findComponent('#monenySaleBtn');
    await btn.trigger('click');
    const priceEle = wrapper.findComponent('#price');
    const price = parseInt(priceEle.text())
    expect(price).toBe(1200)
  });
})
