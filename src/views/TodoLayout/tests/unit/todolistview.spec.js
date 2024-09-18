import { shallowMount } from '@vue/test-utils'
import TodoListView from '../../TodoListView.vue'
import * as todoApi from '@/api/todoapi'
import { flushPromises } from '@vue/test-utils'
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
    jest.spyOn(todoApi, 'saveTodo').mockImplementation(() => {
      return Promise.resolve({
        status: 200
      })
    })
    wrapper = shallowMount(TodoListView)
  })
  test('화면 진입 후 todo리스트를 조회한다', async () => {
    //given
    //when
    //then
    const findTodoItemList = wrapper.findAll('todo-item-stub')
    expect(findTodoItemList.length).toBe(2)
  })

  test('Input에값을 입력하고 저장하면 리스트에 추가한다', async () => {
    //given(준비)
    const todoInput = wrapper.findComponent('todo-input-stub')

    //when(실행)
    await todoInput.vm.$emit('inputtext', 'testvalue')

    //then(검증)
    await flushPromises()
    const findTodoItemList = wrapper.findAll('todo-item-stub')
    expect(findTodoItemList[findTodoItemList.length - 1].attributes()['todotext']).toBe('testvalue')
  })
})
