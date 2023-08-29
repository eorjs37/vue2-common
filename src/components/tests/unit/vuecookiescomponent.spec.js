import { shallowMount } from "@vue/test-utils";
import VueCookiesComponent from '@/components/VueCookiesComponent.vue';
import VueCookies from "vue-cookies";
describe('vue cookies testing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(VueCookiesComponent);
  })
  test('cookies 호출 횟수 체크', async () => {
    const vuecookiesSpy = jest.spyOn(VueCookies, 'get')
    await VueCookiesComponent.created.call(wrapper.vm);
    vuecookiesSpy.mockRestore();
  });

  test("getMockTest 호출", async () => {
    const vuecookiesSpy = jest.spyOn(VueCookies, 'get')
    await wrapper.vm.getMockTest()
    vuecookiesSpy.mockRestore();
  });

  test('createEle 호출', async () => {
    const createEleSpy = jest.spyOn(document, 'createElement').mockImplementationOnce((tagName) => {
      return {
        tagName,
        setAttribute: jest.fn((key, value) => (target[key] = value)),
        click: jest.fn(),
        remove: jest.fn(),

      }
    });

    await wrapper.vm.createEle();
    expect(createEleSpy).toBeCalled();
    expect(createEleSpy.mock.results[0].value.href).toBe("https://naver.com")
    const clickSpy = jest.spyOn(createEleSpy.mock.results[0].value, 'click');
    expect(clickSpy).toBeCalled();
    createEleSpy.mockRestore();
  });

  test("createEle2 호출", async () => {
    const createEleSpy = jest.spyOn(document, 'createElement').mockImplementationOnce((tagName) => {
      return {
        tagName,
        setAttribute: jest.fn((key, value) => (target[key] = value)),
        click: jest.fn(),
        remove: jest.fn(),
      }
    });
    await wrapper.vm.createEle2();
    expect(createEleSpy).toBeCalled();
    expect(createEleSpy.mock.results[0].value.href).toBe("https://aplayz.co.kr")
    const clickSpy = jest.spyOn(createEleSpy.mock.results[0].value, 'click');
    expect(clickSpy).toBeCalled();
    createEleSpy.mockRestore();
  })

});
