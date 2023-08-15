import { shallowMount } from "@vue/test-utils";
import ChildComponent from "@/components/ChildComponent.vue";
describe('ChildComponent Testing', () => {
  test('Emit을 테스트한다.', () => {
    const wrapper = shallowMount(ChildComponent);
    wrapper.vm.$emit('callemit', 123);
    // assert event has been emitted
    expect(wrapper.emitted().callemit).toBeTruthy();
    // assert event count
    expect(wrapper.emitted().callemit.length).toBe(1)

    // assert event payload
    expect(wrapper.emitted().callemit[0]).toEqual([123]);
  });
});
