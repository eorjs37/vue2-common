<template>
  <div>
    <section class="introduce">
      <video muted autoplay loop class="introducevideo"
        src="https://www.aplayz.co.kr/media/images/video/az_official.mp4"></video>
    </section>
    <section class="event">
      <h1>dd</h1>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomeView',

  data() {
    return {
      introduceSrc: 'https://www.aplayz.co.kr/media/images/video/az_official.mp4'
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped>
.introduce {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.introducevideo {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  height: 100vh;
  z-index: -1;
  object-fit: fill;
}

.event {
  height: 700px;
  color: var(--black);
}
</style>
