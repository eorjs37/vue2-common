import { shallowMount } from '@vue/test-utils'
import HocView from '../../HocView.vue'
import { store } from '@/store'
describe('Name of the group', () => {
  beforeEach(() => {
    shallowMount(HocView, {
      global: {
        plugins: [store]
      }
    })
  })

  test('should ', async () => {
    expect(1).toBe(1)
  })
})
