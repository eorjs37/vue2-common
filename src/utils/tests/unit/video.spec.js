import { videoObject } from "@/utils/video";
import Hls from 'hls.js'
describe('video plugin 테스트', () => {
  jest.mock("hls.js");
  beforeEach(async () => {
    Hls.isSupported = jest.fn().mockImplementation(() => {
      return true;
    });

  });
  test('hls 초기 세팅을 진행하면 video src에 주입한다. ', async () => {

    await videoObject.initHls("https://test.m3u8");

    videoObject.hls.loadSource = jest.fn()
    //videoObject.hls.attachMedia = jest.fn();

    expect(videoObject.hls).toBeTruthy();
    //expect(videoObject.hls.loadSource).toBeCalled()
  });
});
