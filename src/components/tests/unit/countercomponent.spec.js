import { shallowMount } from "@vue/test-utils";
import CounterComponent from "@/components/CounterComponent.vue";

describe('Name of the group', () => {
  test('increments counter value on click', async () => {
    const wrapper = shallowMount(CounterComponent);
    const button = wrapper.find('button');
    const text = wrapper.find('p');

    await button.trigger("click");

    expect(text.text()).toContain('Total clicks: 1');
  });

  test("emited foo", () => {
    const wrapper = shallowMount(CounterComponent);
    wrapper.vm.$emit('foo')
    // assert event has been emitted
    expect(wrapper.emitted().foo).toBeTruthy()
  })
});
