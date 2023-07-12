<template>
  <div class="wide">
    <CanvasComponent></CanvasComponent>
  </div>
</template>
<script>
import CanvasComponent from '@/components/CanvasComponent.vue';
export default {
  data() {
    return {}
  },
  components: {
    CanvasComponent
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style scoped>
.wide {
  width: 100%;
  height: 100%;
  background: #061928;
}
</style>
