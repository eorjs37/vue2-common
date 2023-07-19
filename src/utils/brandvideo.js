import Hls from "hls.js";
import { videoObject } from "./video";
import VueCrontab from 'vue-crontab'
import { store } from "@/store";
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
  addCronJob(name, interval, musicInfo) {
    VueCrontab.addJob({
      name,
      interval,
      job: () => {
        this.cronJob(name, interval, musicInfo)
      }
    })
  },
  /**
   * @description cronjob event trigger 일어날때마다 동작하는 함수
   * @author CHOI DAE GEON
   */
  async cronJob(name, interval, musicInfo) {
    store.commit("setBrandPlayList", musicInfo)
    if (!videoObject.getMuted()) {
      await videoObject.fadeOutSound();
    }

    if (store.getters.getBrandActiveIndex < 0) {
      console.log("First Brand music start");
      const nextBrandActiveIndex = store.getters.getBrandActiveIndex + 1
      store.commit("setBrandActiveIndex", nextBrandActiveIndex + 1);
      this.playBrandPusic();
    }
  },
  /**
   * @description 브랜드음원 start
   * @author CHOI DAE GEON
   */
  playBrandPusic() {
    if (Hls.isSupported()) {
      const current = store.getters.getCurrentBrandMusic;
      this.hls = new Hls({
        backBufferLength: 0,
      });
      this.hls.loadSource(current.src);
      this.hls.attachMedia(this.brandvideo);

      this.brandvideo.addEventListener("ended", this.handleEnded.bind(this), { once: true })
    }
  },
  /**
   * @description 음원 종료 이벤트
   * @author CHOI DAE GEON
   */
  handleEnded() {
    this.hls.destroy();

    const nextBrandActiveIndex = store.getters.getBrandActiveIndex + 1
    store.commit("setBrandActiveIndex", nextBrandActiveIndex + 1);
    console.log("nextBrandActiveIndex : ", nextBrandActiveIndex);
    console.log("this : ", this);
    this.playBrandPusic();
  }
}

export { brandVideoObject }
