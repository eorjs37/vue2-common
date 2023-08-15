import { mount, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import ChildComponent from "@/components/ChildComponent.vue";
describe('Helloworld.vue 테스트', () => {
  test('테스트1', () => {
    shallowMount(HelloWorld);
  });
  test("ChildComponent으로부터 callemit 함수 받기", async () => {
    const wrapper = mount(HelloWorld);
    wrapper.findComponent(ChildComponent).vm.$emit('callemit');
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('Emitted')
  })
});
