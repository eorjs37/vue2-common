# vue2-editorconfig

## video 공통 기능 리스트
* ~~Hls 초기화(ios/safari같은 경우 video에 세팅)~~
* ~~자동재생(retry Count 3)~~
* ~~소리 조금씩 줄이기~~
* ~~CronTab 사용~~
* ~~store 재생상태 연동~~
* ~~음원 교체(광고 음악)~~
* ~~소리 조금씩 줄이기~~
* ~~차량용 음원처리~~
* cronTab 공통 처리 필요
* ~~Hls 에러 처리(MEDIA ERROR,NETWORK ERROR)~~
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


## vue transition

### v-enter
> enter의 시작 상태. 엘리먼트가 삽입되기 전에 적용되고 한 프레임 후에 제거됩니다
### v-enter-active
> enter에 대한 활성 및 종료 상태. 엘리먼트가 삽입되기 전에 적용됩니다. 트랜지션 / 애니메이션이 완료되면 제거됩니다.
### v-enter-to
> 진입상태가 완료 될때 사용


### v-leave
> leave를 위한 시작 상태. 진출 트랜지션이 트리거 될 때 적용되고 한 프레임 후에 제거됩니다.

### v-leave-active
> leave에 대한 활성 및 종료 상태.
### v-leave-to
> 진출 상태의 끝에서 실행됩니다


## Jest

### vue jest 설치
```bash
npm install @vue/cli-plugin-unit-jest@5.0.0 --save-dev
npm install @vue/test-utils@1.3.6 --save-dev
npm install @vue/vue2-jest@27.0.0 --save-dev

npm install babel-core@^7.0.0-bridge.0 --save-dev
npm install babel-jest@27.3.1 --save-dev
npm install @babel/core@7.0.0-bridge.0 --save-dev
npm install @babel/preset-env@7.22.10 --save-dev
```
```javascript
//babel.config.js
module.exports = {
  presets: [
    //"@babel/preset-env", 수동설정 원하는 경우
    '@vue/cli-plugin-babel/preset' //vue cli에서 자동설정됨
  ]
}
```


```bash
npm install jest@27.0.3 --save-dev
```


```javascript
//jest.config.js
module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleFileExtensions: [
        "js",
        "json",
        // 모든 vue 파일(`*.vue`)을 처리하기 위해 Jest에게 알려줍니다
        "vue"
    ],
    transform: {
        ".*\\.(vue)$": "@vue/vue2-jest",
        ".*\\.(js)$": "babel-jest",
    },
    moduleNameMapper: {
        // 별칭 @(프로젝트/src) 사용하여 하위 경로의 파일을 맵핑합니다
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
        // __tests__ 경로 하위에 있는 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
        "**/__tests__/**/*.[jt]s?(x)",
        // 파일 이름에 'xxx.spec' 또는 'xxx.test'라는 이름이 붙여인 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
        "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    testPathIgnorePatterns: ["/node_modules/"],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,vue}",
        "!**/node_modules/**",
        "!**/coverage/**",
        "!**vue.config.js**",
        "!**babel.config.js**",
        "!**jest.config.js**",
    ]
}
```

### 명령어 등록
```json
{
 "scripts": {
 	"test:unit": "vue-cli-service test:unit"
 }
}
```


### vue router jest
1. 실제 라우터 쓰는법
2. $route,$router 글로벌 모킹 객체 만들기
