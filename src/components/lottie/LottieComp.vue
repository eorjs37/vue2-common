<template>
  <div>
    <lottie-comp :options="options" :width="60" :height="60" />
  </div>
</template>
<script>
import Lottie from 'vue-lottie';
import sleighData from '@/assets/json/santa_hat.json';
export default {
  name: 'LottieComp',
  components: {
    'lottie-comp': Lottie
  },
  data() {
    return {
      options: { animationData: sleighData },
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
