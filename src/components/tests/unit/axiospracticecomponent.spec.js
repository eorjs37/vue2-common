import { shallowMount } from "@vue/test-utils";
import AxiosPracticeComponent from "@/components/AxiosPracticeComponent.vue";
import axios from "axios";
describe('Axios 컴퍼넌트 테스팅', () => {
  test('버튼 클릭', async () => {
    const mockPostList = [
      { id: 1, title: 'title1' },
      { id: 2, title: 'title2' }
    ]
    jest.spyOn(axios, 'get').mockResolvedValue(mockPostList)
    const wrapper = shallowMount(AxiosPracticeComponent);
    const btn = wrapper.find('#btn');
    await btn.trigger('click');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/api/posts');

    const posts = wrapper.findAll('[data-test="post"]');
    expect(posts).toHaveLength(2);

    expect(posts.at(0).text()).toContain('title1')
    expect(posts.at(1).text()).toContain('title2')
  });

  test('중첩API 버튼 클릭', async () => {
    axios.get = await jest.fn().mockImplementationOnce(() => Promise.resolve({
      status: 200,
      data: {
        result: "0000"
      }
    }))
      .mockImplementationOnce(() => Promise.resolve({
        status: 200,
        data: {
          result: "0001"
        }
      }))


    const wrapper = shallowMount(AxiosPracticeComponent);
    const btn = wrapper.find('#btn2');
    await btn.trigger('click');
    expect(axios.get.mock.calls[0][0]).toBe('/api/posts');
    expect(axios.get.mock.calls[1][0]).toBe('/api/posts2');
  });
});
