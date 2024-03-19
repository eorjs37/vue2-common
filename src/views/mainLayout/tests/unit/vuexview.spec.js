import { createLocalVue, shallowMount } from '@vue/test-utils'
import vuexview from '../../vuexview.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
describe('vuexview test', () => {
  let wrapper = null
  let store = null
  localVue.use(Vuex)
  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      getters: {
        'userInfo/doubleCont': () => {
          return 2
        }
      }
    })
    wrapper = shallowMount(vuexview, {
      store,
      localVue
    })
  })
  test('vuex get doubleCount ', async () => {
    const find = wrapper.findComponent('.test')

    expect(find.text()).toBe('2')
  })
})
