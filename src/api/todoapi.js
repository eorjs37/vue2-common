import { response } from './response'
const saveTodo = () => {
  response.data = {
    result: {
      success: true
    }
  }
  return Promise.resolve(response)
}

export { saveTodo }
