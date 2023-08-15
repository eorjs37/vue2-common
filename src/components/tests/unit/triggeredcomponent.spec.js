import { shallowMount } from "@vue/test-utils";
import TriggeredComponent from '@/components/TriggeredComponent.vue'
describe('TriggeredComponent 테스트', () => {
  test('Test1', async () => {
    const wrapper = shallowMount(TriggeredComponent);
    const btn = wrapper.find('button');
    btn.trigger('click');
    btn.trigger('click');
    btn.trigger('click');
    await wrapper.vm.$nextTick();
    const p = wrapper.find('p');
    expect(p.text()).toBe("3");
  });
});
