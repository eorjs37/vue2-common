# mock
```
모조품, 즉 외부의존성이 있는것을 가짜로 대체하는것이다.
해당 단위테스트에 외부의존성이 있는 경우에는, 단위 테스트 하기가 힘들다.
```
## login.js
```
login.js에서는 fakeApi의 getLoginApi를 호출한다
```
```javascript
import { getLoginApi } from '@/api/fakeApi';
async function login (params) {
	try {
		await getLoginApi(params)
	} catch (error) {
		console.log(error);
	}
}

export {
	login
}
```

## login.spec.js
```
login.js getLoginApi은 외부에 의존하고있다.
그리하여 해당 부분을 테스트하기 위해서, mock 처리가 필요하다
```

```javascript
import { login } from '@/utils/login';
import { getLoginApi } from '@/api/fakeApi';
jest.mock('@/api/fakeApi', () => ({
	// getLoginApi를 가짜(mock)으로 처리
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
		//getLoginApi의 호출 여부를 확인하여 테스트 확인
		expect(getLoginApi).toBeCalledWith({'id': 'chleorjs', 'pw': '1111'})
	});
});
```

# 스냅샷 테스트
```
어떤 모습의 예상결과를 미리 포착해두고 실제 결과에 비교하는 테스트 기법.
실제 결과와 스냅샷을 떠놓은 예상결과와 달라질 경우 테스트 실패
```