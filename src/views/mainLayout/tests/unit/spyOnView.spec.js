import { shallowMount } from "@vue/test-utils";
import spyOnView from '@/views/mainLayout/spyOnView.vue'
describe('SpyOnView Testing', () => {
  test('Testing', () => {
    const spyOn = jest.spyOn(window, 'alert').mockImplementation(() => { });
    const wrapper = shallowMount(spyOnView);
    const btn = wrapper.find('#btn');
    btn.trigger('click');
    expect(spyOn).toBeCalledTimes(1);
    expect(spyOn).toBeCalledWith('클릭하였습니다.')
  });
});
