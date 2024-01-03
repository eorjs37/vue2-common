import { shallowMount } from "@vue/test-utils";
import TimerComponent from '@/components/TimerComponent.vue'
jest.useFakeTimers();
describe('Timer', () => {
  let wrapper = null
  beforeEach(() => {
    wrapper = shallowMount(TimerComponent)
  });
  afterEach(() => {
    jest.clearAllTimers();
  });
  test('5초후 visible 활성화 ', async () => {
    await wrapper.vm.$options.created.forEach(hook => {
      hook.call(wrapper.vm);
    });

    jest.advanceTimersByTime(5000);
    expect(wrapper.vm.isVisible).toBeTruthy();
  });

  test('3초마다 실행', async () => {
    jest.advanceTimersByTime(3000);
    expect(wrapper.vm.isVisible2).toBeTruthy();
  });
});
