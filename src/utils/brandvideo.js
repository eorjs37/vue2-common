import Hls from "hls.js";
import { videoObject } from "./video";
/**
 * @description 브랜드 음원 비디오 객체
 */
const brandVideoObject = {
  brandvideo: null,
  hls: null,
  /**
   * @description Hls Init
   * @param {*} videoSrc 비디오 URL
   * @author CHOI DAE GEON
   */
  initHls(videoSrc) {
    if (Hls.isSupported()) {
      this.hls = new Hls({
        backBufferLength: 0,
      });
      this.hls.loadSource(videoSrc);
      this.hls.attachMedia(this.brandvideo);
    }
  },
  /**
   * @description 브랜드비디오 addEvent
   * @author CHOI DAE GEON
   */
  addEvent() {
    this.brandvideo.addEventListener('ended', this.onEndedEvent)
  },
  /**
  * @description 브랜드비디오 종료 이벤트
  * @author CHOI DAE GEON
  */
  onEndedEvent(evt) {
    console.log("end evt : ", evt);
    videoObject.setVolume(1)
  },
  /**
   * @description 브랜드비디오 Element 세팅
   * @param {*} ele 브랜드비디오 Element
   * @author CHOI DAE GEON
   */
  setBrandVideo(ele) {
    this.brandvideo = ele;
  },
  /**
   * @description 브랜드비디오 Element
   * @returns 브랜드비디오 element
   * @author CHOI DAE GEON
   */
  getBrandVideoEle() {
    return this.brandvideo
  },
}

export { brandVideoObject }
