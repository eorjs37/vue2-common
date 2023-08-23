import { shallowMount } from "@vue/test-utils";
import parentView from '@/views/mainLayout/parentView.vue'
describe('ParentView testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(parentView);
  })
  test('testing1', async () => {
    const childcomponent = wrapper.findComponent('child-component-stub');
    await childcomponent.vm.$emit('callemit', 123);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.close).toBe(true);
  });
  test('button 클릭', async () => {
    const but = wrapper.findComponent('button');
    const onCallEmitSpyOn = jest.spyOn(wrapper.vm, 'onCallEmit')
    await but.trigger('click');
    expect(onCallEmitSpyOn).toBeCalled();
  });
});
