/**
 * @description 비디오 객체
 */
const videoObject = {
  video: null,
  /**
   * @description 비디오 Element
   * @returns 비디오 element
   * @author CHOI DAE GEON
   */
  getVideoEle() {
    return this.video
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
   * @description 비디오 addEvent
   * @author CHOI DAE GEON
   */
  addEvent() {
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
  }
}

export { videoObject }
