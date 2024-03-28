import { createLocalVue, shallowMount } from '@vue/test-utils'
import vuexview from '../../vuexview.vue'
import Vuex from 'vuex'
import { store } from '@/store'
const localVue = createLocalVue()
describe('vuexview test', () => {
  let wrapper = null
  localVue.use(Vuex)
  beforeEach(() => {
    wrapper = shallowMount(vuexview, {
      store,
      stubs: {
        'alert-comp': true
      },
      localVue
    })
  })
  test('vuex get doubleCount ', async () => {
    const find = wrapper.findComponent('.test')
    expect(find.text()).toBe('2')
  })

  test('vuex dispatch apiUserInfo', async () => {
    const btn = wrapper.find(`#userinfoapi`)
    await btn.trigger('click')
    const name = wrapper.find('#name')
    expect(name.text()).toBe('홍길동')
  })
})
