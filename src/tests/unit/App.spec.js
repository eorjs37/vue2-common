import { createLocalVue, mount } from "@vue/test-utils";
import VueRouter from "vue-router";
import { router } from "@/router";
import App from "@/App.vue";
import NestedRoute from '@/layout/nestedRoute.vue'
const localVue = createLocalVue();
localVue.use(VueRouter)

describe('App', () => {
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
