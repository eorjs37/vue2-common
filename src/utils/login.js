
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