import instance from '@/api/axios'
const saveTodo = async (text) => {
  return await instance.post('/api/todo', {
    todo: text
  })
}

const getTodoApi = async () => {
  return await instance.get('/api/todo')
}

export { saveTodo, getTodoApi }
