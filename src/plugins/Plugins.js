import { brandVideoObject } from "@/utils/brandvideo";
import { videoObject } from "@/utils/video"
export default {
  install(Vue) {
    Vue.prototype.$VideoJS = videoObject
    Vue.prototype.$BrandVideoJS = brandVideoObject
  }
}
