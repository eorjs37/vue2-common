import { videoplayer } from './videoplayer'

export default {
  install(Vue) {
    Vue.prototype.$VideoPlayer = videoplayer
  }
}
