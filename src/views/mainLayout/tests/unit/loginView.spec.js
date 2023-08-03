import { mount } from "@vue/test-utils";
import loginView from "@/views/mainLayout/loginView.vue";
import HelloWorld from '@/components/HelloWorld.vue';
describe('LoginView', () => {
  test('로그인 테스트', async () => {
    const wrapper = mount(loginView);
    await wrapper.findComponent(HelloWorld).vm.$emit('custom');
    expect(wrapper.html()).toContain("Emitted!");
  });
});
