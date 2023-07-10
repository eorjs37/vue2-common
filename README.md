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
> 여러컴퍼넌트에 공통에 들어가는 "로직" 기능들을 재사용하는 방법, mixin에는 data,methods,created 등과 같은 컴퍼넌트 옵션

### mixin을 이용하여 모달 만들기
> mixin.js에 모달을 끄고 킬 수 있는 기능을 만든다.

```javascript
const mixin = {
  created: () => {
    console.log("mixin hook called");
  },
  data: () => {
    return {
      //데이터 선언
      modalVisible: false
    }
  },
  methods: {
    //모달 키기
    method1() {
      this.modalVisible = true
    },
    //모달 끄기
    method2() {
      this.modalVisible = false;
    }
  }
}

export { mixin }

```
> mixin을 해당 vue에 import 한다
method1,method2를 통해 모달을 open/close를 할 수 있다.
```vue
<template>
  <div class="container">
    <transition name="fade">
      <SelectModal v-if="modalVisible" @onclose="closeEvent"></SelectModal>
    </transition>

    <button id="modalbtn" @click="method1()">모달 클릭</button>
  </div>
</template>

<script>
import SelectModal from '@/components/SelectModal.vue'
import { mixin } from '@/mixin/mixin'
export default {
  name: 'mainMixin',
  components: {
    SelectModal
  },
  mixins: [mixin],
  data() {
    return {
    };
  },

  mounted() {
  },

  methods: {
    closeEvent() {
      this.method2();
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}</style>

```

### mixin 단점
> vue인스턴스의 data와 mixin의 data가 서로 겹칠수 있다.
