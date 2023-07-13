<template>
  <div>
    <section class="introduce">
      <video class="introducevideo" src="https://www.aplayz.co.kr/media/images/video/az_official.mp4"></video>
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
  width: 100%;
  background-color: aliceblue;
  height: 830px;
}

.introducevideo {

  height: inherit;
}
</style>
