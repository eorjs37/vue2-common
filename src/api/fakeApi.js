import instance from './axios'
const fakeApi = async (value = 0) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: ++value
      })
    }, 2000)
  })
}

const getTextApi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        statusCode: 200,
        data: {
          posttext: '안녕'
        }
      })
    }, 1500)
  })
}

const getLoginApi =  (params) => {
	return instance.get('/api/dummy', params)
}


export { fakeApi, getTextApi,getLoginApi }
