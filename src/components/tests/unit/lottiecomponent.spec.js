import LottieComp from '@/components/lottie/LottieComp.vue'
import { shallowMount } from '@vue/test-utils';
describe('', () => {
  test('should ', async () => {
    shallowMount(LottieComp, {
      mocks: {
        $route: {
          name: 'go'
        }
      }
    })
  });
});
