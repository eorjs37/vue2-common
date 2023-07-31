<template>
  <div class="main_container">
    <div>
      <span>재생상태 : {{ $store.getters.getIsPlay ? '재생' : '중지' }}</span>
      <button @click="playMusic">onPlay</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videoView',

  data() {
    return {

    };
  },

  created() {

  },

  mounted() {
  },

  methods: {
    videoErrorEvent() {
      console.log("videoErrorEvent");
    },
    playMusic() {
      this.$VideoJS.onPlay();
    }
  },
};
</script>

<style scoped>
.video_container {
  margin-top: 80px;
}
</style>
