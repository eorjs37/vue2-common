import { createLocalVue, shallowMount } from '@vue/test-utils'
import vuexview from '../../vuexview.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
const actions = {
  apiGetUserInfo: jest.fn().mockImplementation(() => {
    return '최대건'
  })
}
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
      },
      mutations: {},
      actions
    })
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
    //[data-test="post"]
    const btn = wrapper.find(`#userinfoapi`)
    await btn.trigger('click')
  })
})
