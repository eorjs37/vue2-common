import { shallowMount } from '@vue/test-utils'
import LoginView from '../../LoginView.vue'
describe('loginview unit testing', () => {
  let wrapper = null
  beforeAll(() => {
    wrapper = shallowMount(LoginView)
  })

  test('ID입력 후 엔터', async () => {
    const idInput = wrapper.find('#id')
    idInput.setValue('chleorjs37@gmail.com')
    expect(wrapper.vm.id).toBe('chleorjs37@gmail.com')
  })
})
