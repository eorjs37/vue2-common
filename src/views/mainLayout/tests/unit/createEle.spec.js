import { shallowMount } from "@vue/test-utils";
import createEleView from '@/views/mainLayout/createEleView.vue'
describe('CreateEleView testing', () => {
  test('testMethod 클릭', async () => {
    const wrapper = shallowMount(createEleView);
    const createSpy = jest.spyOn(document, 'createElement').mockReturnValue({
      href: "#",
      click: jest.fn()
    });
    wrapper.vm.testMethod();

    expect(createSpy).toBeCalled();
    await wrapper.vm.$nextTick();
    expect(createSpy.mock.results[0].value.href).toBe("https://aplayz.co.kr")
    console.log();
    expect(createSpy.mock.results[0].value.click).toBeCalled();
    //
    //console.log(createSpy.mock.results[0].value.href);

  });
});
