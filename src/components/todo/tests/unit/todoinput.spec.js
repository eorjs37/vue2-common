import { shallowMount } from '@vue/test-utils'
import TodoInput from '../../TodoInput.vue'
describe('TodoInputItem Unit Test', () => {
  let wrapper = null
  beforeEach(async () => {
    wrapper = shallowMount(TodoInput)
  })

  test('값을 입력하고 enter를 누르면 emit("inputtext")를 호출한다', async () => {
    const input = wrapper.find('#input')
    input.setValue('오늘의 할일')
    await input.trigger('keypress.enter')

    expect(wrapper.emitted()['inputtext'][0]).toEqual(['오늘의 할일'])
  })
})
