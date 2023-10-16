import { createLocalVue, shallowMount } from "@vue/test-utils";
import mediaSessionView from '../../mediaSessionView.vue'
import Plugins from "@/plugins/Plugins";
describe('mediaSession view testing', () => {

  let wrapper = null;

  beforeEach(async () => {
    const localVue = createLocalVue()
    localVue.use(Plugins)

    wrapper = shallowMount(mediaSessionView, {
      localVue
    })
  });
  test('created', async () => {
    console.log(wrapper)
  });
});
