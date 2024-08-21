import instance from './axios'

const dummyapi1 = () => {
  return instance.get('/api/dummy')
}

export { dummyapi1 }
