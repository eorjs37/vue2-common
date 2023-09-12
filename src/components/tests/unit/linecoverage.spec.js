import { shallowMount } from "@vue/test-utils";
import LineCoverageComp from '@/components/LineCoverageComp.vue'
describe('Line Coverage comp test', () => {
  test('test123', () => {
    shallowMount(LineCoverageComp)
  });

  test("라인 커버리지 테스트", async () => {
    const wrapper = shallowMount(LineCoverageComp);
    const btn = wrapper.findComponent('[data-btn="btn"]');

    await btn.trigger('click')
  })

  test("결정 커버리지 테스트-1 true인 경우", async () => {
    const wrapper = shallowMount(LineCoverageComp);
    await wrapper.vm.decisionClick(2, 1);
  })

  test("결정 커버리지 테스트-1 false인 경우", async () => {
    const wrapper = shallowMount(LineCoverageComp);
    await wrapper.vm.decisionClick(1, 2);
  });

  test("조건 커버리지 테스트- 1", async () => {
  })

  test("조건 커버리지 테스트- 2", async () => {

  })

});
