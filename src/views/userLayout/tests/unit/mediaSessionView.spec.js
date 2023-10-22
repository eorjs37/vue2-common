import { createLocalVue, shallowMount } from "@vue/test-utils";
import mediaSessionView from '../../mediaSessionView.vue'
import Plugins from "@/plugins/Plugins";
import axios from "axios";
describe('mediaSession view testing', () => {

  let wrapper = null;

  beforeEach(async () => {
    const localVue = createLocalVue()
    localVue.use(Plugins)


    axios.get = jest.fn().mockImplementation(() => Promise.resolve({
      data: [
        { id: 1, username: "daisy" }
      ]
    }))
    wrapper = shallowMount(mediaSessionView, {
      localVue
    })
  });
  test('created', async () => {

    expect(axios.get).toBeCalled();
    expect(axios.get.mock.calls[0][0]).toBe('/api/list');
  });
});
