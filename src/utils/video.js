import Hls from "hls.js";
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
   * @description get mute(음소거)
   * @author CHOI DAE GEON
   * @returns 음소거 상태
   */
  getMuted() {
    return this.video.muted
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
    this.video.play();
  },
  /**
   * @description 비디오 Pause
   * @author CHOI DAE GEON
   */
  onPause() {
    this.video.pause();
  },
  /**
   * @description 비디오 CanPlaythrough
   * @author CHOI DAE GEON
   */
  canplaythroughEvent() {
    this.videoPromiseRetry()
      .then(result => {
        console.log("result :", result);
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
   * @description 비디오 addEvent
   * @author CHOI DAE GEON
   */
  addEvent() {
    this.video.addEventListener("canplaythrough", this.canplaythroughEvent.bind(this));
    this.video.addEventListener("play", this.playEvent);
    this.video.addEventListener("pause", this.pauseEvent);
  },
  /**
   * @description Play Event
   * @param {*} evt  listener
   * @author CHOI DAE GEON
   */
  playEvent(evt) {
    console.log("play evt : ", evt);
  },
  /**
   * @description Pause Event
   * @param {*} evt  listener
   * @author CHOI DAE GEON
   */
  pauseEvent(evt) {
    console.log("pause evt : ", evt);
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
  }
}

export { videoObject }
