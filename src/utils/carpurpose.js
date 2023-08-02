const carPurposeObject = {
  video: null,
  /**
   *
   * @returns video element
   * @author CHOI DAE GEON
   */
  getVideo() {
    return this.video
  },
  /**
   * @description 차량용 element
   * @author CHOI DAE GEON
   */
  setVideo() {
    this.video = document.querySelector('#car_purpose')
  },
  initSrc(src) {
    if (this.video) {
      this.video.src = src;
    }
  },
  /**
   * @description 차량 음원시작
   */
  onPlay() {
    this.video.play();
  },
  /**
   * @description 중지
   */
  onPause() {
    this.video.pause();
  },
  /**
   * @description 이벤트 등록
   */
  registerEvent(type, fn) {
    this.video.addEventListener(type, fn)
  },
  /**
   * @description 일회용성 이벤트
   */
  onceEvent(type, fn) {
    this.video.addEventListener(type, fn, { once: true })
  },
  /**
   * @description 이벤트 제거
   */
  removeEvent(type, fn) {
    this.video.removeEventListener(type, fn)
  }
}
export { carPurposeObject }
