import { shallowMount } from '@vue/test-utils'
import TodoListView from '../../TodoListView.vue'
import * as todoApi from '@/api/todoapi'
describe('todolistview unit testing', () => {
  let wrapper = null

  beforeAll(() => {
    jest.spyOn(todoApi, 'getTodoApi').mockImplementation(() => {
      return Promise.resolve({
        data: {
          result: {
            todolist: [
              {
                todo: '할일1'
              },
              {
                todo: '할일2'
              }
            ]
          }
        }
      })
    })
    wrapper = shallowMount(TodoListView)
  })
  test('화면 진입 후 todo리스트를 조회한다', async () => {
    //given
    //when
    //then
    const findTodoItemList = wrapper.findComponent('todo-item-stub')
    console.log(findTodoItemList)
  })
})
