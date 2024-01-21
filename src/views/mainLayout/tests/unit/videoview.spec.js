import videoView from '../../videoView.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import { store } from '@/store'
import Plugins from '@/plugins/Plugins';
import { videoObject } from "@/utils/video"
describe('videoview unit testing', () => {
  let wrapper = null;
  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(Plugins);
    wrapper = shallowMount(videoView, {
      store,
      localVue
    })

    const video = document.createElement('video');
    video.setAttribute("id", "global_video")
    videoObject.setVideo(video)
  });

  test('스트리밍 재생을 한다', async () => {
    /* */
    jest.spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockResolvedValue(() => { });
    const btn = wrapper.find("#playbtn")
    btn.trigger('click')
  });

  test('스트리밍 중지를 한다', async () => {

  });
});
