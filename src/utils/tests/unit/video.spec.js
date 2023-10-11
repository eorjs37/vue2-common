import { videoObject } from "@/utils/video";
import Hls from 'hls.js'
jest.mock('hls.js')
describe('video plugin 테스트', () => {

  beforeEach(async () => {
    document.body.innerHTML = `
      <video id="global_video" controls autoplay playsinline></video>
    `
    Hls.isSupported = jest.fn().mockImplementation(() => {
      return true;
    });

    videoObject.setVideo(document.querySelector('#global_video'))

  });
  test('hls 초기 세팅을 진행하면 video src에 주입한다. ', () => {

    videoObject.initHls("https://test.m3u8");

    expect(videoObject.hls).toBeTruthy();

    expect(videoObject.hls.loadSource).toBeCalledWith("https://test.m3u8");

    expect(videoObject.hls.attachMedia).toBeCalledWith(videoObject.video);
  });
});
