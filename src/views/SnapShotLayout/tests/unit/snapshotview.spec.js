import { shallowMount } from '@vue/test-utils';

import SnapShotView from '../../SnapShotView.vue';

describe('snapshotview unit testing', () => {
	let wrapper = null;
	beforeEach(() => {
		wrapper = shallowMount(SnapShotView)
	});
	afterEach(() => {
		wrapper.vm.ROLE = 'GUEST'
	});
	test('관리자일때 화면 테스트', async () => {
		//given
		wrapper.vm.ROLE = 'ADMIN'

		//when

		//then
		expect(wrapper.vm.$el).toMatchSnapshot()

	});

	test('멤버일때 화면 테스트', async () => {
		//given
		wrapper.vm.ROLE = 'MEMBER'

		//when
		await wrapper.vm.$nextTick();
		//then
		expect(wrapper.vm.$el).toMatchSnapshot()

	});

	test('게스트일때 화면 테스트', async () => {
		//given
		wrapper.vm.ROLE = 'GUEST'

		//when
		await wrapper.vm.$nextTick();
		//then
		expect(wrapper.vm.$el).toMatchSnapshot()

	});
});