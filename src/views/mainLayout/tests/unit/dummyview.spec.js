import { shallowMount } from '@vue/test-utils'
import DummyView from '@/views/mainLayout/dummyView.vue'
describe('DummyView Testng', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallowMount(DummyView, {
      data() {
        return {
          prevRoute: {
            path: 'test'
          }
        }
      }
    })
  })
  test('should ', async () => {
    expect(1).toBe(1)
  })
})
