import { shallowMount } from "@vue/test-utils";
import AxiosComponent from '@/components/AxiosComponent.vue'
import axios from "axios";
import flushPromises from 'flush-promises'
describe('Axios Component', () => {
  const mockPostList = [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' }
  ]
  jest.spyOn(axios, 'get').mockResolvedValue(mockPostList)

  test('test1', async () => {
    const wrapper = shallowMount(AxiosComponent);

    await wrapper.get('button').trigger('click')

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/api/posts');

    // Wait until the DOM updates.
    await flushPromises();

    const posts = wrapper.findAll('[data-test="post"]')
    expect(posts).toHaveLength(2);
    expect(posts.at(0).text()).toContain('title1')
    expect(posts.at(1).text()).toContain('title2')
  });

  test('로딩 테스트', async () => {
    const wrapper = shallowMount(AxiosComponent);

    expect(wrapper.find('[role="alert"]').exists()).toBe(false);
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled');

    // Now let's trigger it as usual.
    await wrapper.get('button').trigger('click')

    expect(wrapper.find('[role="alert"]').exists()).toBe(true);
    expect(wrapper.get('button').attributes()).toHaveProperty('disabled');

    await flushPromises();

    expect(wrapper.find('[role="alert"]').exists()).toBe(false);
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled');
  });
});
