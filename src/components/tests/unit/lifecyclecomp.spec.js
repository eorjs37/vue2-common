import { shallowMount } from "@vue/test-utils";
import LifeCycleComp from '@/components/LifeCycleComp.vue'
describe('Name of the group', () => {
  let wrapper = null;
  test('should ', async () => {
    wrapper = shallowMount(LifeCycleComp);
    const spy = jest.spyOn(wrapper.vm, 'testMethod')
    await LifeCycleComp.created.call(wrapper.vm);
    expect(spy).toHaveBeenCalled();

  });
});
