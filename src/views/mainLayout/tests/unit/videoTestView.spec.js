import { shallowMount, createLocalVue } from "@vue/test-utils";
import Plugins from '@/plugins/Plugins';
import videoTestView from '../../videoTestView.vue';
import { videoObject } from "@/utils/video"
describe('Name of the group', () => {
  let wrapper = null;
  beforeEach(async () => {
    const video = document.createElement('video');
    video.setAttribute("id", "global_video")
    const localVue = createLocalVue();
    localVue.use(Plugins);
    videoObject.setVideo(video)
    wrapper = shallowMount(videoTestView, {
      localVue
    })
  });
  test('재생시작 ', async () => {
    jest.spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockResolvedValue(() => { });
    const btn = wrapper.find("#playbtn");
    btn.trigger('click')
  });
});
