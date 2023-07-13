import Hls from "hls.js";
import { videoObject } from "./video";
import VueCrontab from 'vue-crontab'
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
  onEndedEvent() {
    videoObject.setVolume(1.0)
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
  /**
   * @description cronjob add
   * @param {*} name 크론job name
   * @author CHOI DAE GEON
   */
  addCronJob(name) {
    VueCrontab.addJob({
      name,
      interval: {
        seconds: '0',
        minutes: '06',
        hours: '7'
      },
      job: this.cronJob
    })
  },
  /**
   * @description cronjob event trigger 일어날때마다 동작하는 함수
   * @author CHOI DAE GEON
   */
  cronJob() {
    console.log("start crontab : ", new Date());
  }
}

export { brandVideoObject }
