import { login } from '@/utils/login';
import { getLoginApi } from '@/api/fakeApi';
jest.mock('@/api/fakeApi', () => ({
	getLoginApi:jest.fn()
}))

describe('login unit testing', () => {
	afterEach(() => {
		getLoginApi.mockClear();
	});

	test('로그인 호출 ', async () => {
		await login({
			id: 'chleorjs',
			pw: '1111'
		})
		expect(getLoginApi).toBeCalledWith({'id': 'chleorjs', 'pw': '1111'})
	});
});