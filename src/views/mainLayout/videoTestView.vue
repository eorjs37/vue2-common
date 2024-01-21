<template>
  <div class="main_container">
    <div class="video_container">
      <div class="control">
        <button id="playbtn" @click="playMusic">onPlay</button>
        <button id="pausebtn" @click="pauseMusic">onPause</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VideoTestView',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    playMusic() {
      console.log("playMusic");
      this.$VideoJS.onPlay()
        .then(() => {
          console.log("success play");
        }).catch(error => {
          {
            console.error("error : ", error);
          }
        })
    },
    pauseMusic() {
      this.$VideoJS.onPause();
    },
  },
};
</script>
<style scoped></style>
