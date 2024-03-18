import { createLocalVue, shallowMount } from '@vue/test-utils'
import vuexview from '../../vuexview.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
describe('vuexview test', () => {
  let wrapper = null
  let store = null
  localVue.use(Vuex)
  beforeEach(() => {
    const userInfo = {
      state: {
        count: 0
      },
      getters: {
        doubleCont: () => {
          return 2
        }
      }
    }
    store = new Vuex.Store({
      state: {},
      getters: {},
      modules: {
        userInfo
      }
    })
    wrapper = shallowMount(vuexview, {
      store,
      localVue
    })
  })
  test('should ', async () => {
    expect(1).toBe(1)
  })
})
