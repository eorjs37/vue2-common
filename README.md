# vue2-editorconfig

## vuex jest

## vue@compact

```
vue2의 동작이 호환되는 구성을 제공하는 vue3 빌드
```

## provide/inject

```
기존에는 최상위 부모와 최하위 컴퍼넌트에서 통신할려면 중간 컴퍼넌트한테도,
props으로 전달해야하는 현상이 있었다.
vue3에서는 provide를 통해 최상위 부모에 선언하고 inject를 이용하여 자식 컴퍼넌트에서 사용이 가능하다.

Sub1Layout.vue => Sub1View.vue => Common1Comp.vue
```

### Sub1Layout.vue

```html
<template>
  <router-view></router-view>
</template>
<script setup>
  import { onMounted, provide, ref } from 'vue'
  const count = ref(0)

  const addCount = () => {
    count.value++
  }
  //부모에 provide를 선언
  provide('count', count)
  provide('addCount', addCount)

  onMounted(() => {})
</script>
```

### Common1Comp.vue

```html
<script setup>
  import { inject } from 'vue'
  // inject를 통해 부모에서 받은 값이나 함수 사용
  const count = inject('count')
  const addCount = inject('addCount')
</script>
<template>
  <div>
    <div>{{ count }}</div>
    <button @click="addCount">숫자 늘리기</button>
  </div>
</template>
```
