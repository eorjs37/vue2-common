# vue2-editorconfig

## video 공통 기능 리스트
* ~~Hls 초기화(ios/safari같은 경우 video에 세팅)~~
* ~~자동재생(retry Count 3)~~
* ~~소리 조금씩 줄이기~~
* ~~CronTab 사용~~
* ~~store 재생상태 연동~~
* ~~음원 교체(광고 음악)~~
* ~~소리 조금씩 줄이기~~
* cronTab 공통 처리 필요
* Hls 에러 처리(MEDIA ERROR,NETWORK ERROR)
* 자동재생(예약된 시간에 음원 on/off)

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
  const ele = document.querySelector('#video');
  //https://www.aplayz.co.kr/broadcast/a44610765711c95e0fcd4274c93116ec.m3u8
  const src = 'https://dev.stream.aplayz.co.kr/broadcast/507996edfd70ab18fa1dc99cb096966b.m3u8'
  this.$VideoJS.setVideo(ele)
  this.$VideoJS.initHls(src)
  this.$VideoJS.addEvent()
}
```

## vue - mixin
