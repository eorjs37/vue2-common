const carPurposeObject = {
  video: null,
  /**
   *
   * @returns video element
   */
  getVideo() {
    return this.video
  },
  setVideo() {
    this.video = document.querySelector('#car_purpose')
  }
}
export { carPurposeObject }
