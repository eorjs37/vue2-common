import { createLocalVue, mount } from "@vue/test-utils";
import VueRouter from "vue-router";
import { router } from "@/router";
import App from "@/App.vue";
import NestedRoute from '@/layout/nestedRoute.vue'
import DummyLayout from '@/layout/dummyLayout.vue'
const localVue = createLocalVue();
localVue.use(VueRouter)
localVue.component("dummy-layout", DummyLayout)

describe('App', () => {

  test('Dummy Rendering', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
    });

    await router.push("/dummy");
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(DummyLayout).exists()).toBe(true)
  });
  test('rendering', async () => {
    jest.mock("@/layout/NestedRoute.vue", () => ({
      name: "NestedRoute",
      render: h => h("div")
    }))
    const wrapper = mount(App, {
      localVue,
      router,
      stubs: {
        NestedRoute: true
      }
    });

    router.push("/nested")
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(NestedRoute).exists()).toBe(true)

  });


});
