import instance from './axios'

const dummyapi1 = () => {
  return instance.get('/api/dummy')
}

const dummySaveApi = async () => {
  return await instance.post('/api/savedummy')
}

const deleteDummyApi = async ()=>{
  return await Promise.resolve({
    status:200,
    data:{
      resultCd:'0000',
      resultMsg:'삭제되었습니다.'
    }
  })
}

export { dummyapi1, dummySaveApi,deleteDummyApi }
