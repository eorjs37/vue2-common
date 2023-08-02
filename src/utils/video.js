import Hls from "hls.js";
import { store } from "@/store";
/**
   * @description 비디오 객체
   */
const videoObject = {
  video: null,
  hls: null,
  /**
  * @description 비디오 Element
  * @returns 비디오 element
  * @author CHOI DAE GEON
  */
  getVideoEle() {
    return this.video
  },
  /**
  * @description Hls return
  * @author CHOI DAE GEON
  * @returns Hls
  */
  getHls() {
    return this.hls
  },
  /**
   * @description 뮤트 설정
   * @param {*} value 뮤트값
   */
  setMuted(value) {
    this.video.muted = value
  },
  /**
  * @description get mute(음소거)
  * @returns 음소거 상태
  * @author CHOI DAE GEON
  */
  getMuted() {
    return this.video.muted
  },
  /**
  * @description 볼륨 설정
  * @param {*} volume 볼륨
  * @author CHOI DAE GEON
  */
  setVolume(volume) {
    this.video.volume = volume
  },
  /**
   * @description 볼륨값
   * @author CHOI DAE GEON
   * @returns video volume
   */
  getVolume() {
    return this.video ? parseFloat(this.video.volume).toFixed(1) : 0;
  },
  /**
  * @description 비디오 재생상태 Return
  * @returns 비디오 재생상태
  * @author CHOI DAE GEON
  */
  getPasuedState() {
    return this.video.paused;
  },
  /**
  * @description 비디오 Element 세팅
  * @param {*} ele 비디오 Element
  * @author CHOI DAE GEON
  */
  setVideo(ele) {
    this.video = ele;
  },
  /**
  * @description 비디오 Play
  * @author CHOI DAE GEON
  */
  onPlay() {
    return this.video.play();
  },
  /**
  * @description 비디오 Pause
  * @author CHOI DAE GEON
  */
  onPause() {
    this.video.pause();
  },
  /**
  * @description 비디오 addEvent
  * @author CHOI DAE GEON
  */
  addEvent() {
    this.video.addEventListener("canplaythrough", this.canplaythroughEvent.bind(this));
    this.video.addEventListener("play", this.playEvent);
    this.video.addEventListener("pause", this.pauseEvent);
  },
  /**
   * @description 비디오 이벤트 등록
   * @author CHOI DAE GEON
   */
  videoRegisterEvent(type, fn) {
    if (this.video) {
      this.video.addEventListener(type, fn)
    }
  },
  /**
  * @description 비디오 CanPlaythrough
  * @author CHOI DAE GEON
  */
  canplaythroughEvent() {
    this.videoPromiseRetry()
      .then(() => {
      })
      .catch(err => {
        if (err.name === 'FailRetry') {

          alert("재생버튼을 클릭해주세요")
        }
        else {
          alert("관리자에게 문의해주세요")
        }
        console.error("videoPromiseRetry error : ", err.name);
      })
  },
  /**
  * @description Play Event
  * @param {*} evt  listener
  * @author CHOI DAE GEON
  */
  playEvent() {
    store.commit("setPlay", true);
  },
  /**
  * @description Pause Event
  * @param {*} evt  listener
  * @author CHOI DAE GEON
  */
  pauseEvent() {
    store.commit("setPlay", false);
  },
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
      this.hls.attachMedia(this.video);
    }
    else if (this.video.canPlayType('application/vnd.apple.mpegurl')) {
      this.video.src = videoSrc
    }
  },
  /**
  * @description 비디오 자동실행
  * @param {*} retryCount 시도 횟수
  * @returns Promise
  * @author CHOI DAE GEON
  */
  videoPromiseRetry(retryCount = 3) {
    return new Promise((resolve, reject) => {
      const retry = (attempt = 0) => {
        const promise = this.video.play();

        if (promise !== undefined) {
          promise
            .then(() => {
              resolve('videoPromiseRetry success')
            })
            .catch(error => {
              console.error("videoPromiseRetry error : ", error);
              if (attempt < retryCount) {
                console.error(`작업을 재시도 합니다. 남은 횟수 : ${retryCount - attempt}`);
                setTimeout(() => retry(attempt + 1), 1000)
              }
              else {
                const error = new Error('작업을 실패하였습니다.')
                error.name = 'FailRetry';
                reject(error)
              }
            })
        }
      }

      retry(0)
    })
  },
  /**
  * @description 소리 조금씩 줄이기
  * @author CHOI DAE GEON
  */
  fadeOutSound() {
    const sound = this.video.volume;
    return new Promise((resolve) => {
      const fadeOut = (volume) => {
        if (volume > 0.1) {
          this.video.volume = volume - 0.1;
          setTimeout(() => {
            fadeOut(volume - 0.1)
          }, 1000)

        }
        else {
          resolve();
        }
      }

      fadeOut(sound)
    })
  },
  /**
   * @description Hls에러 이벤트 등록
   * @param {*} eventsType  Hls.Events
   * @param {*} fn function
   */
  registerHlsErrorEvent(eventsType, fn) {
    if (this.hls) {
      this.hls.on(eventsType, fn);
    }
  },
  /**
   * @description hls destory
   * @author CHOI DAE GEON
   */
  destory() {
    this.hls.destroy();
  },
  /**
   * @description 등록된 이벤트 제거
   * @param {*} type 이벤트명
   * @param {*} fn 함수
   */
  removeVideoEvent(type, fn) {
    this.video.removeEventListener(type, fn)
  }
}

export { videoObject }
