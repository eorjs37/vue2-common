import instance from './axios'

const dummyapi1 = () => {
  return instance.get('/api/dummy')
}

const dummySaveApi = async () => {
  return await instance.post('/api/savedummy')
}

export { dummyapi1, dummySaveApi }
