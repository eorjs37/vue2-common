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
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'ParticlesView',
  components: {
    'particles-bg': ParticlesBg
  },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>
```

```javascript
//jest.config.js
//transformIgnorePatterns 에  <rootDir>/node_modules/(?!(particles-bg-vue)|(?!@scu/vue)/) 추가
module.exports = {
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(particles-bg-vue)|(?!@scu/vue)/)'],
}
```
