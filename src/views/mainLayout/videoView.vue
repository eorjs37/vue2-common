<template>
  <div>
    <video id="video" controls autoplay playsinline></video>
    <div>
      <span>재생상태 : {{ $store.getters.getIsPlay ? '재생' : '중지' }}</span>
    </div>
    <video id="brandvideo" controls autoplay playsinline></video>
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
    const ele = document.querySelector('#video')
    const src = 'https://stream.aplayz.co.kr/broadcast/e1698bab11ad3d62179b3390f4e7a097.m3u8'
    const brandEle = document.querySelector('#brandvideo')
    this.$VideoJS.setVideo(ele)
    this.$VideoJS.initHls(src);
    this.$VideoJS.addEvent();

    this.$BrandVideoJS.setBrandVideo(brandEle)
    this.$BrandVideoJS.addEvent();
  },

  methods: {

  },
};
</script>

<style scoped>
#video {
  width: 100%;
  height: 35px;
}

#brandvideo {
  width: 100%;
  height: 35px;
}
</style>
