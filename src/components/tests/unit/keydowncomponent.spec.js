import { shallowMount } from "@vue/test-utils";
import KeyDownComponent from '@/components/KeyDownComponent.vue'
describe('KeyDownComponent testing', () => {
  test('keydown', () => {
    const wrapper = shallowMount(KeyDownComponent);
    expect(wrapper.vm.quantity).toBe(0)
  });

  test('버튼을 클릭할 경우 2배를 곱한다.', async () => {
    const wrapper = shallowMount(KeyDownComponent);
    wrapper.vm.quantity = 4;
    const btn = wrapper.find('#btn');
    await btn.trigger('click');
    expect(wrapper.vm.quantity).toBe(8);
  });
  test('방향키 위 버튼 누를 경우 값을 증가시킨다.', async () => {
    const wrapper = shallowMount(KeyDownComponent);
    const input = wrapper.find('input');
    await input.trigger('keydown.up');
    expect(wrapper.vm.quantity).toBe(1);
  });

  test('방향키 아래 버튼 누를 경우 값을 감소시킨다.', async () => {
    const wrapper = shallowMount(KeyDownComponent);
    wrapper.vm.quantity = 4;
    const input = wrapper.find('input');
    await input.trigger('keydown.down');
    expect(wrapper.vm.quantity).toBe(3);
  });

  test("Esc 누를 경우 값을 초기화 시켜준다.", async () => {
    const wrapper = shallowMount(KeyDownComponent);
    wrapper.vm.quantity = 20;
    const input = wrapper.find('input');
    await input.trigger("keydown.esc");
    expect(wrapper.vm.quantity).toBe(0)
  });

  test('"a"버튼 누를 경우 값을 13으로 세팅한다.', async () => {
    const wrapper = shallowMount(KeyDownComponent);
    wrapper.vm.quantity = 20;
    const input = wrapper.find('input');
    await input.trigger("keydown", {
      key: 'a'
    });
    expect(wrapper.vm.quantity).toBe(13)
  });
});
