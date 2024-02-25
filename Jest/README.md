# 2023-10-13

## jest swiper css 호출시 에러뜨는 현상

```bash
Unexpected token '.' ~~
```

### 조치

#### styleMock.js 생성

```javascript
// tests/jest/__mocks__/styleMock.js
export default {}
```

```javascript
// jest.config.js
module.exports = {
  moduleNameMapper: {
    // 아래 부분 추가
    '\\.(css|less)$': '<rootDir>/tests/jest/__mocks__/styleMock.js'
  }
}
```

## particles-bg-vue 에서 'Cannot use import statement outside a module' 에러

```html
<!-- particlesView.vue -->
<template>
  <div>
    <particles-bg type="lines" :bg="true" />
  </div>
</template>
<script>
  import { ParticlesBg } from 'particles-bg-vue'
  export default {
    name: 'ParticlesView',
    components: {
      'particles-bg': ParticlesBg
    },
    data() {
      return {}
    },

    mounted() {},

    methods: {}
  }
</script>
<style scoped></style>
```

```javascript
//jest.config.js
//transformIgnorePatterns 에  <rootDir>/node_modules/(?!(particles-bg-vue)|(?!@scu/vue)/) 추가
module.exports = {
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(particles-bg-vue)|(?!@scu/vue)/)']
}
```

# 2023-10-17

## Plugin 테스트

> vue에서 custom plugin을 만들 수 있다.

```javascript
// src/utils/mediaSession.js
const mediaSessionObject = {
  init() {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = null
      navigator.mediaSession.playbackState = 'none'
      return true
    }

    return false
  }
}

export { mediaSessionObject }
```

## 플러그인 등록

```javascript
// src/plugins/Plugins.js
import { mediaSessionObject } from '@/utils/mediaSession'
export default {
  install(Vue) {
    Vue.prototype.$MediaSession = mediaSessionObject
  }
}
```

## main.js 등록

```javascript
//main.js
import Vue from 'vue'
import App from './App.vue'
import Plugins from './plugins/Plugins'

Vue.use(Plugins)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
```

## 테스트 코드 작성

```html
<!-- src/views/userLayout/mediaSessionView.vue -->
<template>
  <div></div>
</template>
<script>
  export default {
    name: 'MediaSessionView',

    data() {
      return {}
    },
    created() {
      if (this.$MediaSession.init()) {
        console.log('this.$MediaSession.init()')
      }
    },
    mounted() {},

    methods: {}
  }
</script>
<style scoped></style>
```

```javascript
// src/views/userLayout/tests/unit/mediaSessionView.spec.js
import { createLocalVue, shallowMount } from '@vue/test-utils'
import mediaSessionView from '../../mediaSessionView.vue'
import Plugins from '@/plugins/Plugins'
describe('mediaSession view testing', () => {
  let wrapper = null

  beforeEach(async () => {
    //1. createLocalVue 생성
    const localVue = createLocalVue()
    //2. localVue.use의 인자에 Plugins 넣기
    localVue.use(Plugins)

    wrapper = shallowMount(mediaSessionView, {
      //3. shallowMount에 localVue등록
      localVue
    })
  })
  test('should ', async () => {
    console.log(wrapper)
  })
})
```

## setTimeOut

```
jest.useFakeTimers() : setTimeout 함수를 포함한 다른 Timer 함수들을 Mock함수로 만든다.
jest.runAllTimers() : 등록된 모든 timer 함수들이 실행될 때까지 빨리감기한다.
jest.advanceTimersByTime(n) : n초만큼 시간이 흐리게 한다.
```

```javascript
describe('timeOut Testing', () => {
  test('10초 기다리고 1초 증가', () => {
    jest.useFakeTimers()
    let counter = 0
    setTimeout(() => {
      counter++
      expect(counter).toBe(1)
    }, 10000)

    jest.runAllTimers()
  })
})
```

```html
<template>
  <div>
    <p id="count">{{ count }}</p>
    <p id="intervalCount">{{ intervalCount }}</p>
  </div>
</template>
<script>
  export default {
    name: 'TimeOut',

    data() {
      return {
        count: 0,
        intervalCount: 0,
        intervalId: -1
      }
    },
    created() {
      setTimeout(() => {
        this.count++
      }, 5000)

      this.intervalId = setInterval(() => {
        this.intervalCount++
      }, 1000)
    },
    mounted() {},

    methods: {},
    destroyed() {
      clearInterval(this.intervalId)
    }
  }
</script>
<style scoped></style>
```

## video
