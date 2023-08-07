import { brandVideoObject } from "@/utils/brandvideo";
import { videoObject } from "@/utils/video"
import { carPurposeObject } from "@/utils/carpurpose";
import { testplugin } from '@/utils/testpulguin'
import { myplugin } from "@/utils/myplugins";
export default {
  install(Vue) {
    Vue.prototype.$VideoJS = videoObject
    Vue.prototype.$BrandVideoJS = brandVideoObject
    Vue.prototype.$CarPurposeJS = carPurposeObject;
    Vue.prototype.$TestPlugin = testplugin;
    Vue.prototype.$MyPlugins = myplugin;
  }
}
