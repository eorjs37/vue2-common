import { login } from '@/utils/login';
import * as FakeApi from '@/api/fakeApi';

describe('login unit testing', () => {
	afterEach(() => {
	});

	test('로그인 호출 성공', async () => {
		const getLoginApi = jest.spyOn(FakeApi, 'getLoginApi').mockImplementation(() => {
			return Promise.resolve({
				status: 200,
				data: {
					resultMsg:'통과입니다'
				}
			})
		});
		const result = await login({
			id: 'chleorjs',
			pw: '1111'
		})
		expect(getLoginApi).toBeCalledWith({ 'id': 'chleorjs', 'pw': '1111' })
		expect(result).toBeTruthy()
		getLoginApi.mockClear()
	});

	test('로그인 호출 실패', async () => {
		const getLoginApi = jest.spyOn(FakeApi, 'getLoginApi').mockImplementationOnce(() => {
			return new Promise((_, reject) => {
				const error = new Error()
				error.response = {
					status: 400,
					resultMsg:'ID와비밀번호가 일치하지 않습니다'
				}
				reject(error)
			})
		})
		const result = await login({
			id: 'chleorjs',
			pw: '1112'
		})
		expect(getLoginApi).toBeCalledWith({ 'id': 'chleorjs', 'pw': '1112' })
		expect(result).toBeFalsy()
	});
});