import { shallowMount } from "@vue/test-utils";
import RandomComponent from '@/components/RandomComponent.vue'
describe('Random Component Testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(RandomComponent);
  })
  test('Testing1-', async () => {
    const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.2)
    const result = await wrapper.vm.generateRandomString(20);
    expect(randomSpy).toBeCalled();
    console.log("result : ", result);
  });
});
