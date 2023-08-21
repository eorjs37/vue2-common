import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from 'vuex'
import VuexComponents from '@/components/VuexComponent.vue'
import { store } from "@/store";
describe('Vuex componentn testing', () => {
  test('should ', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const wrapper = shallowMount(VuexComponents, {
      store,
      localVue
    });

    expect(wrapper.find('[data-vuex="username"]').text()).toBe("안녕하세요");
  });

  test('vuex getters', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const wrapper = shallowMount(VuexComponents, {
      store,
      localVue
    });
    expect(wrapper.find('[data-vuex="usergreet"]').text()).toBe("안녕하세요 최대건님");
  });

});
