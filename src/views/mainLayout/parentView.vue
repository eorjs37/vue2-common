<template>
  <div>
    <h1>Parent</h1>
    <child-component @callemit="onCallEmit" />
    <button @click="onCallEmit(456)">버튼</button>
  </div>
</template>
<script>
import ChildComponent from '@/components/ChildComponent.vue';
export default {
  name: 'ParentView',
  components: {
    'child-component': ChildComponent
  },
  data() {
    return {
      close: false
    };
  },

  mounted() {

  },

  methods: {
    onCallEmit(val) {
      console.log(val);
      this.close = true;
    }
  },
};
</script>
<style scoped></style>
