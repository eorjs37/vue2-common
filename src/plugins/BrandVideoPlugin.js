import { brandVideoObject } from "@/utils/brandvideo";
export default {
  install(Vue) {
    Vue.prototype.$BrandVideoJS = brandVideoObject
  }
}
