import { shallowMount } from "@vue/test-utils";
import VuexMockComponent from '@/components/VuexMockComponent.vue'
describe('VuexMockComponentn testing', () => {
  test('testing1', () => {
    const object = {
      userName: "안녕하세요",
      lastName: "최대건"
    }
    const wrapper = shallowMount(VuexMockComponent, {
      mocks: {
        $store: {
          state: {
            userName: object.userName,
            lastName: object.lastName
          },
          getters: {
            getterFullName: `${object.userName} ${object.lastName}님`
          }
        }
      }
    });

    expect(wrapper.find('#greet').text()).toBe("안녕하세요 최대건님")

  });
});
