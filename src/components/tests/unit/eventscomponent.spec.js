import { shallowMount } from "@vue/test-utils";
import EventsComponent from "@/components/EventsComponent.vue";
import flushPromises from "flush-promises";

jest.mock('axios', () => ({
  get: () => {
    return Promise.resolve({
      data: {
        value: "value"
      }
    })
  }
}))
describe('키보드 이벤트 테스트', () => {

  test('Click on yes button calls our method with argument "yes"', async () => {
    const callMe = jest.fn();
    const wrapper = shallowMount(EventsComponent, {
      propsData: {
        callMe
      }
    });
    const spy = jest.spyOn(wrapper.vm, 'callMe')

    await wrapper.find('button.yes').trigger('click');
    expect(spy).toBeCalledWith('yes')
  });
});

describe('Key event tests', () => {
  test('Key Event tests', async () => {
    const wrapper = shallowMount(EventsComponent);
    expect(wrapper.vm.quantity).toBe(0)
  });

  test('Up arrow key increments quantity by 1', async () => {
    const wrapper = shallowMount(EventsComponent);
    const input = wrapper.find('input')
    await input.trigger('keydown.up');
    expect(wrapper.vm.quantity).toBe(1)
  });

  test("Esc 클릭", async () => {
    const wrapper = shallowMount(EventsComponent);
    const input = wrapper.find('input')
    wrapper.vm.quantity = 5;
    await input.trigger('keydown.esc');
    expect(wrapper.vm.quantity).toBe(0)
  })

  test('key down 클릭', async () => {
    const wrapper = shallowMount(EventsComponent);
    const input = wrapper.find('input');
    wrapper.vm.quantity = 5;
    await input.trigger('keydown.down');
    expect(wrapper.vm.quantity).toBe(4)
  });

  test('Magic character "a" sets quantity to 13', async () => {
    const wrapper = shallowMount(EventsComponent);
    const input = wrapper.find('input');
    await input.trigger('keydown', {
      key: 'a'
    });
    expect(wrapper.vm.quantity).toBe(13)
  });

  test('비동기 호출 테스트', async () => {


    const wrapper = shallowMount(EventsComponent);
    wrapper.find('#btn').trigger('click');
    await flushPromises();
    const result = wrapper.find('.result');
    expect(result.text()).toBe('value');
  });
});
