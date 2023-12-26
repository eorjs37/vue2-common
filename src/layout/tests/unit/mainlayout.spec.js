import { shallowMount, createLocalVue } from "@vue/test-utils";
import Plugins from "@/plugins/Plugins";
import MainLayout from "@/layout/mainLayout.vue";
jest.mock('vue-lottie')
describe('', () => {
  let wrapper = null
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Plugins);

    const video = document.createElement('video');
    video.setAttribute("id", "global_video");
    document.body.appendChild(video)

    wrapper = shallowMount(MainLayout, {
      localVue,
      attachTo: '#global_video',
      stubs: ['router-view'],
      mocks: {
        $route: {
          name: ''
        }
      }
    })
  });
  test('should ', async () => {
    console.log(wrapper.html());
  });
});
