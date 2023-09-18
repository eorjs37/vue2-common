<template>
  <div>
    <button @click="changeComponent">변경 컴퍼넌트</button>
    <component :is="currentTabComponent" />
  </div>
</template>
<script>
export default {
  name: 'DynamicView',

  data() {
    return {
      tab: "dynamic1Comp",
      currentTabComponent: () => import(`@/components/dynamicLayout/${this.tab}.vue`),

    };
  },

  mounted() {

  },

  methods: {
    changeComponent() {
      this.tab = this.tab === 'dynamic1Comp' ? 'dynamic2Comp' : 'dynamic1Comp';
      this.currentTabComponent = () => import(`@/components/dynamicLayout/${this.tab}.vue`)
    }
  },
};
</script>
<style scoped></style>
