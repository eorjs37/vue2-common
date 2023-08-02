import { brandVideoObject } from "@/utils/brandvideo";
import { videoObject } from "@/utils/video"
import { carPurposeObject } from "@/utils/carpurpose";
export default {
  install(Vue) {
    Vue.prototype.$VideoJS = videoObject
    Vue.prototype.$BrandVideoJS = brandVideoObject
    Vue.prototype.$CarPurposeJS = carPurposeObject
  }
}
