<template>
  <div>
    <button>클릭</button>
    <child-component @callemit="onCallEmit" />
    <p v-if="emitted">Emitted!</p>
  </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
  components: {
    'child-component': ChildComponent
  },
  data() {
    return {
      emitted: false
    }
  },
  methods: {
    onCallEmit() {
      this.emitted = true;
    }
  }
}
</script>
<style scoped></style>
