import { shallowMount } from "@vue/test-utils";
import TimerComponent from '@/components/TimerComponent.vue'
describe('Timer', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallowMount(TimerComponent)
  });
  test('5초후 visible 활성화 ', async () => {
    await wrapper.vm.$options.created.forEach(hook => {
      hook.call(wrapper.vm);
    });
  });
});
