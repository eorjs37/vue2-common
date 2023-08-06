const testplugin = {
  el: null,
  setEl() {
    this.el = document.querySelector('.foo')
  },
  getEl() {
    return this.el;
  }
}
export { testplugin }
