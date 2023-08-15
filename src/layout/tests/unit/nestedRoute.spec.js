import { shallowMount } from "@vue/test-utils";
import NestedRoute from "@/layout/nestedRoute.vue";
describe('NestedRoute', () => {
  test('쿼리 스트링으부터 userName을 렌더한다.', () => {
    const username = "alice";
    const wrapper = shallowMount(NestedRoute, {
      mocks: {
        $route: {
          params: { username }
        }
      }
    });
    expect(wrapper.find('.username').text()).toBe(username)
  });
});
