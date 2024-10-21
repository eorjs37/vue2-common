import { shallowMount } from '@vue/test-utils'
import LoginView from '../../LoginView.vue'
describe('loginview unit testing', () => {
  let wrapper = null
  beforeAll(() => {
    wrapper = shallowMount(LoginView)
  })

  test('ID입력 input 값 변경 확인', async () => {
    //given
    const idInput = wrapper.find('#id')

    //when
    idInput.setValue('chleorjs37@gmail.com')

    //then
    expect(wrapper.vm.id).toBe('chleorjs37@gmail.com')
  })

  test('비밀번호 입력 input 값 변경 확인', async () => {
    //given
    const passwordInput = wrapper.find('#password')

    //when
    passwordInput.setValue('1234')

    //then
    expect(wrapper.vm.password).toBe('1234')
  })
})
