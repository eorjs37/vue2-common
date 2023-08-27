import { shallowMount } from "@vue/test-utils";
import TimeOutComponent from '@/components/TimeOutComponent.vue'
describe('timeout component', () => {
  let wrapper;
  beforeEach(() => {

    jest.useFakeTimers();
    wrapper = shallowMount(TimeOutComponent);

  })
  test('timeout', async () => {
    jest.advanceTimersByTime(10000)
    expect(wrapper.vm.visible).toBe(true);
  });

  test("interval", () => {
    jest.advanceTimersByTime(1000)
    expect(wrapper.vm.count).toBe(1);
  })
});
