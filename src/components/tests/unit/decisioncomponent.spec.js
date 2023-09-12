import { shallowMount } from "@vue/test-utils";
import DecisionComponent from '@/components/DecisionComponent.vue'
describe('결정 커버리지 컴퍼넌트 테스트', () => {
  test('decisionClick 클릭-1', () => {
    const wrapper = shallowMount(DecisionComponent);
    wrapper.vm.decisionClick(2, 1)
  });
  test('decisionClick 클릭-2', () => {
    const wrapper = shallowMount(DecisionComponent);
    wrapper.vm.decisionClick(1, 2)
  });
});
