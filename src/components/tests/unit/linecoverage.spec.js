import { shallowMount } from "@vue/test-utils";
import LineCoverageComp from '@/components/LineCoverageComp.vue'
describe('Line Coverage comp test', () => {
  test('test12', () => {
    shallowMount(LineCoverageComp)
  });

  test("btn click", async () => {
    const wrapper = shallowMount(LineCoverageComp);
    const btn = wrapper.findComponent('[data-btn="test"]');

    await btn.trigger('click')
  })
});
