# vue2-editorconfig

## vue - plugins
> 자주 쓰는 기능들 또는 공통의 기능들을 사용해줄 수 있도록 해주는 기능  Video에 관한 기능들을 Plugins으로 생성.

```javascript
/* VideoPlugin.js */
import { videoObject } from "@/utils/video"
export default {
  install(Vue) {
    Vue.prototype.$VideoJS = videoObject
  }
}
```

```javascript
/* App.vue */
mounted(){
  const ele = document.querySelector('#video')
  const src = 'https://www.aplayz.co.kr/broadcast/13e683a6e5e543211a764bf85d28be7e.m3u8'
  this.$VideoJS.setVideo(ele)
  this.$VideoJS.initHls(src)
  this.$VideoJS.addEvent()
}
```

## vue - mixin
