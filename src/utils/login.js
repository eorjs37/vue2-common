
import { getLoginApi } from '@/api/fakeApi';
async function login (params) {
	try {
		const {  status } = await getLoginApi(params)
		if (status === 200) {
			//
			return true
		}
	} catch (error) {
		if (error.response) {
			const { status } = error.response;
			if (status === 400) {
				return false
			}
		}
	}
}

export {
	login
}