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
