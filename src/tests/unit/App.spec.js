import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App', () => {
  test('Dummy Rendering', async () => {
    expect(1).toBe(1)
  })
})
