import { store } from '@/store'

describe('store 테스트 코드 작성', () => {
  test('카운터(counter) 초기값 확인 ', async () => {
    expect(store.state.counter).toBe(1)
  })

  test('사용자 정보(userInfo) 초기값 확인', async () => {
    expect(store.state.userInfo).toEqual({
      name: '',
      age: 0
    })
  })

  // mutations 호출
  test('카운터 정보세팅(setCounter) ', async () => {
    store.commit('setCounter', 2)
    expect(store.state.counter).toBe(2)
  })

  test('사용자 정보세팅(setUserInfo) ', async () => {
    store.commit('setUserInfo', {
      name: '김대건',
      age: 33
    })
    expect(store.state.userInfo).toEqual({
      name: '김대건',
      age: 33
    })
  })

  // getters
  test('getters:getCounter', async () => {
    const getCounter = store.getters.getCounter
    expect(getCounter).toBe(store.state.counter)
  })
  test('getters:getUserInfo', async () => {
    const getUserInfo = store.getters.getUserInfo
    expect(getUserInfo).toEqual(store.state.userInfo)
  })

  // actions 값 확인
  test('actions: apiSetUserInfo', async () => {
    const userInfo = {
      name: '홍길동',
      age: 31
    }
    await store.dispatch('apiSetUserInfo')
    expect(store.state.userInfo).toEqual(userInfo)
  })
})
