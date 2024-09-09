import instance from '@/api/axios'
import { response } from './response'
const saveTodo = () => {
  response.data = {
    result: {
      success: true
    }
  }
  return Promise.resolve(response)
}

const getTodoApi = async () => {
  return await instance.get('/api/todo')
}

export { saveTodo, getTodoApi }
