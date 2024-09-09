import { shallowMount } from '@vue/test-utils'
import TodoListView from '../../TodoListView.vue'
import axios from 'axios'
jest.mock('axios')
describe('todolistview unit testing', () => {
  let wrapper = null

  beforeAll(() => {
    axios.get = jest.fn().mockImplementation((url) => {
      console.log('url : ', url)
    })
  })
  beforeAll(() => {
    wrapper = shallowMount(TodoListView)
  })
  test('ex1', async () => {
    expect(1).toBe(1)
  })
})
